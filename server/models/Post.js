const mongoose = require('mongoose');

const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');
const commentSchema = require('./Comment');

const postSchema = new Schema({
  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  caption: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  // comments: [commentSchema.schema]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
