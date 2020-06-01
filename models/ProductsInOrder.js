module.exports = function(sequelize, DataTypes) {
        
    const ProductsInOrder = sequelize.define(
      "ProductsInOrders", {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
        }
        )
    
    ProductsInOrder.associate = function(models) {
      ProductsInOrders.hasMany(models.Products, {as: 'products'}
     );
    }

    return ProductsInOrder;
  };