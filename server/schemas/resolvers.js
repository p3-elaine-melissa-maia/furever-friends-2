const { AuthenticationError } = require('apollo-server-express');
const { User, Comment, Post } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    users: async () => {
      // populate posts and comments subdocuments when querying for users
      return await User.find({}).populate('posts').populate({
        path: 'posts',
        populate: 'comments'
      });
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    posts: async () => {
      // populate comments subdocument when querying for posts
      return await Post.find({}).populate('comments');
    },
    comments: async () => {
      return await Comment.find({});
    }
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
    addPost: async (parent, { userId, img, caption }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { posts: caption } },
          { 
            new: true,
            runvalidators: true, 
          }
      );
    }
    throw new AuthenticationError('You need to be logged in!');
  },
    addComment: async (parent, { postId, commentBody }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
        { _id: postId },
        { $addToSet: { comments: commentBody }},
        { new: true } 
        );
      }
      throw new AuthenticationError('You need to be logged in!')
    }, 
  },
};

module.exports = resolvers;
