module.exports = function(sequelize, DataTypes) {
    const Products = sequelize.define(
      "Products", {
        
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        
        image_url: {
          type: DataTypes.STRING
        },
        
        price: {
          type: DataTypes.INTEGER, // Float? Decimal?
          allowNull: false
        },

        year: {
          type: DataTypes.INTEGER,
          allowNull: false
        },

        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        
		    isAvailable: {
			    type: DataTypes.BOOLEAN,
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
      },

    // Not sure if these associates are correct...
    // Products belong to many carts
    // Products belong to many products in orders
      
      /*Products.associate = function(models) {
        Products.belongsToMany(models.Cart, { 
          as: 'cart',
          through: models.Cart,
          foreignKey: 'cartId'
         });

        Products.belongsToMany(models.ProductsInOrders, { 
          as: 'permissions', 
          through: models.ProductId, 
          foreignKey: 'productId'
          })
      }*/
    );
    return Products;
  };