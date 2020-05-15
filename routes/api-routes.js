// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require('../models');
var path = require("path")

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the users plants 
  // app.get("/", function(req, res) {
  //     res.json('route hit')
  // });
// Delete later. simply for testing
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // ----------Testing route for creating new user.------------ (works through postman)
  app.post('/api/users', function(req, res) {
    db.user.findAll({
      where: {
        emailAddress: req.body.email,
      }
      
      // password: req.body.password
    })
    .then(function(user) {
      console.log('existing user', user.data);
      if (user.length === 0) {
        db.user.create({
          emailAddress: req.body.email,
          password: req.body.password

        })
      }
      // res.json('new user created');

    })
  });
};
