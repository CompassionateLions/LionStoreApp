module.exports = function (sequelize, DataTypes) {

  const Order = sequelize.define(
    "Order", {
<<<<<<< HEAD
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    total: {
      type: DataTypes.INTEGER,
      allowNull: true
    }

    //Address - future
  },
  )
  Order.associate = function (models) {
    Order.belongsToMany(models.Product, { through: 'products_in_order', as: 'Products' });
  }

=======

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    }
    //Address - future
  },
  )
  Order.associate = function (models) {
    Order.belongsToMany(models.Product, { through: 'products_in_order' });
  }

>>>>>>> 260da15657de6e195f409a84e4b014f061aa1920
  return Order;
};