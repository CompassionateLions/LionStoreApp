module.exports = function(sequelize, DataTypes) {
   
    const Cart = sequelize.define(
      "Cart", {
        quantity: {
          type: DataTypes.INTEGER,
          defaultValue: 1
        },

        price: {
          type: DataTypes.INTEGER, // Float? Decimal?
          allowNull: false
        }    
      }      
    )
    
    Cart.associate = function(models) {

    }
    
    return Cart;
  };
