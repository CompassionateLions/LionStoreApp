module.exports = function(sequelize, DataTypes) {
    const Product = db.model('products');

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
        },

        instanceSubtotal: {
          getSubtotal: function() {
            return this.price * this.quantity;
          }
        },

        include: [Product]
        
      }      
    )
    
    Cart.associate = function(models) {
      Cart.belongsTo(models.Users, {
        foreignKey: {
          allowNull: false
        }
      });
    }
    
    return Cart;
  };