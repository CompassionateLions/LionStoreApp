const bcrypt = require('bcrypt');

//Returns the hash of the inputed password
const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if(err) return reject(err);

            return resolve(hash);
        })
    })
}

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
                type: DataTypes.STRING,
                allowNull: false
            },
            role: {
                type: DataTypes.STRING,
                defaultValue: "user"
            }
        },
        {
            hooks: {
                beforeCreate: async function(user, options){
                    user.password = await hashPassword(user.password);
                }

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