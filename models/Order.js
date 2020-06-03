module.exports = function (sequelize, DataTypes) {

  const Order = sequelize.define(
    "Order", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }

    //Address - future
  },
  )
  Order.associate = function (models) {
    Order.belongsToMany(models.Product, { through: 'Products_in_order', as: 'Products' });
  }

  return Order;
};