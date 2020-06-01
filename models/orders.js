const Users = db.model('users');
const Cart = db.model('Cart');

module.exports = function(sequelize, DataTypes) {

    const Orders = sequelize.define(
      "Orders", {
        
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
        
      },
      
      Orders.associate = function(models) {
        Orders.belongsTo(models.ProductsInOrders, {
          as: 'productsInOrders',
          foreignKey: 'ordersId'
        })
      }
    )
    return Cart;
  };