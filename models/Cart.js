module.exports = function(sequelize, DataTypes) {
   
    const Cart = sequelize.define(
      "Cart", {
        quantity: {
          type: DataTypes.INTEGER,
          defaultValue: 1
        }
      }      
    )
    
    Cart.associate = function(models) {

    }
    
    return Cart;
  };
