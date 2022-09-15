const db = require('./connection');
const { User, Post, Comment } = require('../models');

db.once('open', async () => {
  await Post.deleteMany({});
  await User.deleteMany({});
  await Comment.deleteMany({});

  const posts = await Post.insertMany([
    {
      username: 'davidrose',
      caption: 'I am trying very hard not to connect with people right now',
    },
    {
      username: 'alexisrose',
      caption: 'Cats are the best pets',
    },
    {
      username: 'steviebud',
      caption: 'So thankful for my pet',
    },
  ]);

  const users = await User.insertMany([
    {
      username: 'davidrose',
      fullname:'David Rose',
      email: 'drose@gmail.com',
      password: 'password'
    },
    {
      username: 'alexisrose',
      fullname: 'Alexis Rose',
      email: 'alexisrose@gmail.com',
      password: 'password'
    },
    {
      username: 'steviebud',
      fullname: 'Stevie Bud',
      email: 'sbud@gmail.com',
      password: 'password'
    },
  ]);

  const commentBodies = await Comment.insertMany([
    {
      username: 'davidrose',
      commentBody: 'Very uninterested in that opinion',
    },
    {
      username: 'alexisrose',
      commentBody:'Cute, David',
    },
    {
      username: 'steviebud',
      commentBody: 'I want another pet!',
    },
  ]);

  console.log('Seeding complete! 🌱');

  process.exit();
});
