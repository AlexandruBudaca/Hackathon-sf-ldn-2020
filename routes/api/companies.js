const express = require("express");
const router = express.Router();
const Company = require("../../models/Company");
const bcrypt = require("bcryptjs");

//testing GET api/companies

router.get("/", (req, res)=>{
  res.json({ message: "company is working" });
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

module.exports = router;
