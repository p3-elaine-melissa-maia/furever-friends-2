const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    // set custom id to avoid confusion with parent id
    commentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    commentBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
