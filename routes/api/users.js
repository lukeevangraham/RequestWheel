const express = require("express");
const router = express.Router();
// const User = require('../../models/user.js')
const db = require("../../models");
const passport = require("../../passport");

router.post("/", (req, res) => {
  console.log("user signup");

  const { email, password, firstName, lastName, orgName, permissions } = req.body;
  // ADD VALIDATION
  // db.User.findOne({ email: email }, (err, userMatch) => {
  //     if (err) {
  //         console.log("User.js post error: ", err)
  //     }
  //     else if (userMatch) {
  //         return res.json({
  //             error: `Sorry, already a user with the email: ${email}`
  //         })
  //     } else {
  //     const newUser = new User({
  //         email: email,
  //         password: password
  //     });
  //     newUser.save((err, savedUser) => {
  //         if (err) return res.json(err)
  //         return res.json(savedUser)
  //     })
  // console.log("let's make a user!")
  // }
  // })
  console.log("EMAIL: ", email);
  db.User.findOne({ where: { email: email } }).then(userMatch => {
    console.log("USERMATCH: ", userMatch);
    if (userMatch) {
      return res.json({
        error: `Sorry, already a user with the email: ${email}`
      });
    } else {
      db.User.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        orgName: orgName,
        permissions: permissions
      })
        .then(function(response) {
          // console.log("looking good! response: ")
          // console.log(response)
          res.json(response);
          // res.redirect(307, "/");
        })
        .catch(function(err) {
          console.log("post error!");
          console.log(err);
          res.json(err);
        });
    }
  });
});

router.post(
  "/login",
  function(req, res, next) {
    // console.log("routes/user.js, login, req.body: ");
    // console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("logged in", req.user);
    var userInfo = {
      email: req.user.email,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      orgName: req.user.orgName,
      permissions: req.user.permissions
    };
    res.send(userInfo);
  }
);

router.get("/", (req, res, next) => {
  console.log("===== user!!======");
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post("/logout", (req, res) => {
  if (req.user) {
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

router.get("/inOrg/:org", (req, res, next) => {
  console.log("ORG: ", req.params.org);
  db.User.findAll({
    where: {
      orgName: req.params.org
    }
  })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
