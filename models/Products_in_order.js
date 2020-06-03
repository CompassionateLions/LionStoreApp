module.exports = function(sequelize, DataTypes) {
   
    const Products_in_order = sequelize.define(
      "Products_in_order", {
        quantity: {
          type: DataTypes.INTEGER,
          defaultValue: 1,
          allowNull: false
        },

        price: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        }
      }      
    )
    
    return Products_in_order;
  };