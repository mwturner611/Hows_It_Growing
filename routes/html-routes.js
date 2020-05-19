var db = require('../models');

module.exports = function(app) {

    // open the home page for the user to sign in
    app.get('/', function(req,res){
        res.render('index',)
    });

    // open the user's page with their plants displayed
    app.get('/user/:id', function(req,res) {
        db.user.findOne({
            where: {
              id: req.params.id
            },
            include: [db.plant]
          })
        .then(function(data){
            console.log('user data', data)
            
            
            
            // open user page with the plant info  
            // res.json(data)
            res.render('user',{plant: data.plants, user: data.dataValues.emailAddress, id: data.dataValues.id});
            // if(err) throw err;
        })
    })
};