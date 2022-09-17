const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('posts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts');
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('posts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    posts: async (parent, { username }) => {
      const params = username ? {username} : {};
      return  Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('posts');
      } 
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  
  // define functions that will fulfill the mutations
  Mutation: {
    addUser: async (parent, { username, fullname, email, password }) => {
      const user = await User.create({ username, fullname, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!')
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user }
    },
    addPost: async (parent, { caption }, context) => {
      if (context.user) {
        const post = await Post.create({
          caption,
          postAuthor: context.user.username,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } },
      );

      return post;
    }
    throw new AuthenticationError('You need to be logged in!');
  },

  removePost: async (parent, { _id }, context) => {
    console.log(_id);
      if (context.user) {
        const post = await Post.findByIdAndDelete({
          _id: _id,
          // postAuthor: context.user.username,
        });

        // await User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   { $pull: { posts: post._id } }
        // );

        return post;
      }
      throw new AuthenticationError('You need to be logged in!')
    },
  },
};

module.exports = resolvers;
