module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define(
        "User", {

            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
              },
            email: {
                type: DataTypes.STRING, //validation by passport? or here?
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING
            },
        }
    );

    User.associate = function(models) {
        User.hasMany(models.Cart, { as: 'cart'})
        User.hasMany(models.Orders, {as: 'orders'})
        }

    
    return Users;
    
};