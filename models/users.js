module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define(
        "User", {
            email: {
                type: DataTypes.STRING, //validation by passport? or here?
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING
            },
        }
    );
    return User;
  };