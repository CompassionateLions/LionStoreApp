module.exports = function(sequelize, DataTypes) {
    const Product = db.model('products');
    
    const Cart = sequelize.define(
      "Cart", {
        
        quantity: {
          type: DataTypes.INTEGER,
        },

        price: {
          type: DataTypes.INTEGER, // Float? Decimal?
          allowNull: false
        },

        instanceSubtotal: {
          getSubtotal: function() {
            return this.price * this.quantity;
          }
        },

        include: [Product]
        
      }
    )
    return Cart;
  };