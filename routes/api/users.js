const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = require("../../config/keys").JWT_KEY
const checkAuth = require("../../middleware/check-auth.js")

// Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
const Opportunities = require("../../models/Opportunities");

// @route   POST api/users/signup

router.post("/signup", (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Email exists",
        });
      } else {
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
                  message: "new user created",
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
    });
});

// @route   POST api/users/login
router.post("/login", (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Authorization failed",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Authorization failed",
          });
        }
        if (result) {
          let token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id,
            },
            secretKey,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "Authorization successful",
            token: token,
          });
        }
        res.status(401).json({
          message: "Authorization failed",
        });
      });
    })
    .catch();
});

// @route   GET api/users
// @desc    Tests users route
// @access  Public

// router.get('/', (req, res) => res.json({ msg: 'Users Works' }));

router.get("/",checkAuth, (req, res) => {
  User.find().then((users) => res.json(users));
});
// @route   DELETE api/users


router.delete("/:userId", (req, res) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "User deleted",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
