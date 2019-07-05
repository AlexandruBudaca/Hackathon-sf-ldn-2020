const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for users to post information also creating new accounts
const PostSchema = new Schema({
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'users'
  // },
  // text: {
  //   type: String,
  //   required: true
  // },
  name: {
    type: String
  },
  friendsName: {
    type: String
  },
  bestName: { 
    type: String
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
