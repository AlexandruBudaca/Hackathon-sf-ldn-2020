const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post model
const Post = require('../../models/Post');
// Profile model
const Profile = require('../../models/Profile');

// Validation
const validatePostInput = require('../../validation/post');

// @route   GET api/posts
// @desc    Tests post route
// @access  Public

router.post('/',(req,res) =>  {
  const newPost = new Post({
    user: req.body.user,
    // text: req.body.text,
    name: req.body.name
  })
  newPost.save().then(Post => res.json(Post));

});

module.exports = router;
