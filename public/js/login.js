// import from other files 
// var users = require('../../models/users');

// Function to compare user-entered info with db info 
// grab email and password
$('#login-btn').click(function(){
    var userEmail = $('#email-input').val().trim();
    var userPassword = $('#password-input').val().trim();
    var userData = {
        email: userEmail, 
        password: userPassword 
    };
    $.post('/api/users', userData)
    .then(function(res){
    console.log(res)
     console.log('user created', userData)
    window.location.replace(`/user/${res[0].id}`);
    });
    
    console.log(userEmail);
   
});




