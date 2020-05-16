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
            
            // open user page with the plant info  
            res.render('user',{plant: plant});
        })
    })
};