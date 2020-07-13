const express = require("express");
const router = express.Router();

// Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
const Post = require("../../models/Post");

// @route   GET api/users
// @desc    Tests users route
// @access  Public
//router.get('/', (req, res) => res.json({ msg: 'Users Works' }));

// router.get('/',(req,res) =>  {
//   User.find()
//   .then(users => res.json(users));
// });

module.exports = router;
