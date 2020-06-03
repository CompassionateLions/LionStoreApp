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
          type: DataTypes.INTEGER,
          allowNull: false,
          get(){
            return this.getDataValue('price')/100;
          },
          set(dollars){
            return this.setDataValue('price', dollars*100);
          }
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
      
      Product.associate = function(models) {
        
        Product.belongsToMany(models.User,
          {through: 'Cart', as: 'UserCart'});

        Product.belongsToMany(models.Order, {through: 'Products_in_order', as: 'Orders'});
      }
    
    return Product;
  };