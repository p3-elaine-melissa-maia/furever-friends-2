const mongoose = require('mongoose');

const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');

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
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
