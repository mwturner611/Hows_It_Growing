// Requiring bcrypt for password hashing.
var bcrypt = require("bcryptjs");
// Users model.
module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("user", {
      emailAddress: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });

    // Associate each user stored in database to their plants.
    Users.associate = function(models) {
      Users.hasMany(models.plant);
    };

    // Method for checking if an unhashed password entered can be compared to a hashed password in the database.
    Users.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Before a User is created, automatically hash their password.
    Users.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
  
    return Users;
};