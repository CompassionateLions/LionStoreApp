module.exports = function(sequelize, DataTypes) {

    const Order = sequelize.define(
      "Order", {
        
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
    )
      Order.associate = function(models) {
        Order.belongsToMany(models.Product, {through: 'products_in_order'});
      }
    
    return Order;
  };