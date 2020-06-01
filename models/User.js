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
        User.belongsToMany(models.Product, {
            through: 'Cart',
            as: 'CartContents'
        })
        User.hasMany(models.Order, {
            foreignKey: {
                field: 'user_id',
                onDelete: 'cascade'
              }, 
            as: 'Orders'})
        }
    
    return User;
    
};