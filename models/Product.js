module.exports = function(sequelize, DataTypes) {
    const Product = sequelize.define(
      "Product", {
        
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
          allowNull: true
        },

        genre: {
          type: DataTypes.TEXT,
          allowNull: false
        },

        actors: {
          type: DataTypes.TEXT,
          allowNull: true
        },

        director: {
          type: DataTypes.TEXT,
          allowNull: true
        },

        format: {
          type: DataTypes.TEXT,
          allowNull: false,
          defaultValue: "DVD"
        },

        rating: {
          type: DataTypes.TEXT,
          allowNull: true
        }

      }
    )
    // Not sure if these associates are correct...
    // Product belong to many carts
    // Product belong to many Product in orders
      
      Product.associate = function(models) {
        
        Product.belongsToMany(models.User,
          {through: 'Cart', as: 'UserCart'});

        Product.belongsToMany(models.Order, {through: 'products_in_order', as: 'Orders'});
      }
    
    return Product;
  };