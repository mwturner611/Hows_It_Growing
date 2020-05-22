// Plants model.
module.exports = function(sequelize, DataTypes) {
    var Plants = sequelize.define('plant', {
        plantType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255]
        }
      },
      nickName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255]
        }
      },
      sunday: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      monday: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      tuesday: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      wednesday: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      thursday: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      friday: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      saturday: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      watered: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
    });

    // Associate each plant to the user.
    Plants.associate = function(models) {
        Plants.belongsTo(models.user, {
          foreignKey: {
            allowNull: false
          }
        });
    };

    return Plants;
};