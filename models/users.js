module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define(
        "Users", {
            email: {
                type: DataTypes.STRING, //validation by passport? or here?
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING
            },
        }
    );
    return Users;
  };