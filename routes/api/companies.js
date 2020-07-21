const express = require("express");
const router = express.Router();
const Company = require("../../models/Company");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = require("../../config/keys").JWT_KEY;


//GET api/companies
router.get("/", (req, res) => {
  Company.find().then((compaines) => res.json(compaines));
});

//making POST api/companies/signup

router.post("/signup", (req, res)=> {
  Company.find({
    companyEmail: req.body.companyEmail,
  })
    .exec()
    .then((data) => {
      console.log(data);
      if (data.length >= 1) {
        return res.status(409).json({
          message: "Email already in database",
        });
      } else {
        //    Store hash in your password DB.
        bcrypt.hash(req.body.companyPassword, 10, (err, hash)=> {
          if (err) {
            res.sendStatus(500).json({ error: "err" });
          } else {
            const newCompany = new Company({
              companyName: req.body.companyName,
              companyEmail: req.body.companyEmail,
              companyPassword: hash,
              date: Date.now(),
            });
            newCompany
              .save()
              .then((Company) => {
                console.log(Company);
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

// @route   POST api/companies/login
router.post("/login", (req, res) => {

  
  Company.find({ companyEmail: req.body.companyEmail })
    .exec()
    .then((company) => {
      if (company.length < 1) {
        return res.status(401).json({
          message: "Authorization failed",
        });
      }
      bcrypt.compare(req.body.companyPassword, company[0].companyPassword, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Authorization failed",
          });
        }
        if (result) {
          let token = jwt.sign(
            {
              companyEmail: company[0].email,
              compnayId: company[0]._id,
            },
            secretKey,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            companyName: company[0].companyName,

            compnayEmail: company[0].companyEmail,
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

module.exports = router;
