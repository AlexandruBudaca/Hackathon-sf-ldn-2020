const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
const Post = require("../../models/Post");

// @route   Post api/users/signup
// @desc    Tests post route
// @access  Public

router.post("/signup", (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user=>{
      if(user.length >= 1){
        return res.status(409).json({
          message:'Email exists'
        })
      }else{
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({ error: err });
          } else {
            const newUser = new User({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: hash,
            });
            newUser
              .save()
              .then((User) => {
                console.log(User);
                res.status(201).json({
                  message: "User created",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });

      }
    })
    
  
});

// @route   GET api/users
// @desc    Tests users route
// @access  Public
// router.get('/', (req, res) => res.json({ msg: 'Users Works' }));

router.get("/", (req, res) => {
  User.find().then((users) => res.json(users));
});
// @route   DELETE api/users

router.delete('/:userId',(req,res)=>{
  User.remove({_id:req.params.userId})
    .exec()
    .then(result=>{
      res.status(200).json({
        message: "User deleted"
      })
    })
    .catch(err=>{
      res.status(500).json({
        error:err
      })
    })

})

module.exports = router;
