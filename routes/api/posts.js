const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Post model
const Post = require("../../models/Post");
// Profile model
const Profile = require("../../models/Profile");

// Validation
const validatePostInput = require("../../validation/post");

// @route   GET api/posts
// @desc    Tests post route
// @access  Public

router.post("/", (req, res) => {
  const newPost = new Post({
    user: req.body.user,
    // text: req.body.text,
    friendsName: req.body.friendsName,
    bestName: req.body.bestName
  });
  newPost.save().then(Post => res.json(Post));
});

// @route   GET api/posts/get/
// @desc    GET all the information from the POST request above 
// @access  Public

router.get("/get/", (req, res) => {
  Post.find().then(Post => res.json(Post));
});

module.exports = router;
