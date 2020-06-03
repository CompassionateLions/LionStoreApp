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
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING
            },
            role: {
                type: DataTypes.STRING,
                defaultValue: "user"
            }
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