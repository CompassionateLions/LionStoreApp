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
        }

      },
      
 /*     Orders.associate = function(models) {
        Orders.belongsTo(models.ProductsInOrders, {
          as: 'productsInOrders',
          foreignKey: 'ordersId'
        })
      }*/
    )
    return Orders;
  };