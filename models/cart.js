module.exports = function(sequelize, DataTypes) {
   
    const Cart = sequelize.define(
      "Cart", {
        
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },

        quantity: {
          type: DataTypes.INTEGER,
        },

        price: {
          type: DataTypes.INTEGER, // Float? Decimal?
          allowNull: false
        }    
        
      }      
    )
    
    Cart.associate = function(models) {
      Cart.belongsTo(models.User, {foreignKey: 'User.Id', as: 'user', allowNull: false}
     );
    }
    
    return Cart;
  };