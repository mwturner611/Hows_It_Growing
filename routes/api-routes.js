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
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });

  // get a user and plants from DB
  app.get("/api/plants/:user", function(req,res){
    db.user.findOne({
      where: {
        id: req.params.user
      },
      include: [db.plant]
    })
    .then(function(userPlants) {
      res.json(userPlants);
    })
  })

  // add a plant to the plant table
  app.post("/api/plant/:user", function(req,res){
    console.log(req.body);
    db.plant.create({
      plantType: req.body.plantType,
      nickName: req.body.nickName,
      userId: req.params.user
    })
      .then(function(newPlant){
        res.json(newPlant);
      })
  })

// delete a plant from the plant table
app.delete("/api/plant/:id", function(req,res){
  db.plant.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(plant){
      res.json(plant);
    })
})

// Put route for updating a plant
app.put("/api/plant/:id", function(req,res){
  db.plant.update(req.body,{
    where: {
      id: req.params.id
    }
  })
    .then(function(plant){
      res.json(plant);
    })
})

  // creating a new user
  app.post('/api/users', function(req, res) {
    db.user.findAll({
      where: {
        emailAddress: req.body.email,
      }
      
      // password: req.body.password
    })
    .then(function(user) {
      res.json(user);
      console.log('existing user', user);
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
