const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      'Please enter a valid email address!'
    ]
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
],
friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
],
},
{
  toJSON: {
      virtuals: true,
  },
  //prevents virtuals from creating duplicates of _id as 'id'
  id: false,
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.virtual('friendCount').get(function () {
  return `${this.friends.length}`;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
