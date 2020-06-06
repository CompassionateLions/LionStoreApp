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
      defaultValue: 0,
      get(){
        return this.getDataValue('total')/100;
      },
      set(dollars){
        return this.setDataValue('total', dollars*100);
      }
    }

    //Address - future
  },
  )
  Order.associate = function (models) {
    Order.belongsToMany(models.Product, { through: 'Products_in_order', as: 'Products' });
  }

  return Order;
};