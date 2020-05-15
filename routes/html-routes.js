var db = require('../models');

module.exports = function(app) {

    // open the home page for the user to sign in
    app.get('/', function(req,res){
        res.render('index',)
    });

    // open the user's page with their plants displayed
    app.get('/user/:id', function(req,res) {
        db.plant.findAll({
            where: {
                userId: req.params.id
            }
        })
        .then(function(plant){
            // res.json works fine in postman
            // res.json(plant);

            // res.render to the user handlebars returns 2 blank list items.  
            res.render('user',{plant: plant});
        })
    })
};