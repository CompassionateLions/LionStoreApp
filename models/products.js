module.exports = function(sequelize, DataTypes) {
    const Products = sequelize.define(
      "Products", {
        
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        
        image_url: {
          type: DataTypes.ARRAY (Datatypes.STRING),
          defaultValue: [],
          get: function () {
            if(this.getDataValue('imageUrls').length === 0) {
              return ['/defaultproduct.jpg'];
            }
            return this.getDataValue('imageUrls');
          },
        },
        
        price: {
          type: DataTypes.INTEGER, // Float? Decimal?
          allowNull: false
        },

        quantity: {
          type: DataTypes.INTEGER, // Float? Decimal?
          allowNull: false
        },
        
		    isAvailable: {
			    type: Sequelize.BOOLEAN,
			    defaultValue: true
        },
        
        description: {
          type: DataTypes.STRING,
          allowNull: false
        },

        genre: {
          type: DataTypes.TEXT,
          allowNull: false
        }
      }
    )
    return Products;
  };