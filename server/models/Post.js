const mongoose = require('mongoose');

const { Schema } = mongoose;
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
    default: Date.now
  },
  // comments: [commentSchema.schema]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
