const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const passport = require("passport");
// const checkAuth= require('../../middleware/check-auth')


// Opportunities model
const Opportunities = require("../../models/Opportunities");
// Profile model
const Profile = require("../../models/Profile");

// Validation
const validateOpportunitiesInput = require("../../validation/opportunities");

// @route  POST api/opp
// @desc    Tests post route
// @access  Public

router.post("/", (req, res) => {
  const newOpportunities = new Opportunities({
    company: req.body.company,
    // role: req.body.role,
    // type: req.body.type,
    // minimum_proficiency: req.body.minimum_proficiency,
    // location: req.body.location,
    // description : req.body.description,
    // date: Date.now()
  });
  newOpportunities.save().then(Opportunities => res.json(Opportunities));
});

// @route   GET api/opp
// @desc    GET all the information from the POST request above
// @access  Public

router.get("/",(req, res) => {
  Opportunities.find().then(Opportunities => res.json(Opportunities));
});

// @route   DELETE api/opportunities/delete/id
// @desc    Delete user and profile
// @access  Private

router.delete("/delete/:id", function(request, response) {
  let id;
  try {
    id = new mongodb.ObjectID(request.params.id);
  } catch (error) {
    response.status(400);
    return;
  }
  const searchObject = { _id: request.params.id };
  Post.deleteOne(searchObject, function(error, result) {
    if (error) {
      return response.sendStatus(500).send(error);
    } else if (result.deletedCount) {
      return response.sendStatus(200);
    } else {
      return response.sendStatus(404);
    }
  });
});

module.exports = router;
