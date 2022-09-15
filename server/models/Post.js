const mongoose = require('mongoose');

const { Schema } = mongoose;
const commentSchema = require('./Comment');

const postSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
  },
  caption: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  },
  comments: [commentSchema.schema]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
