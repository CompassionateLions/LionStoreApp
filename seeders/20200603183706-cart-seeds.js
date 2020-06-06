'use strict';

const db = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return db.User.findAll({where:{}}).then(users => {
      const userPromiseArr = users.map(user => {
        return db.Product.findAll({
          where:{}, 
          limit: Math.ceil((Math.random()* 5)+.01), 
          order: db.sequelize.random()
        }).then(products => {
          return user.addCartContents(products);
        })
      
      });

      return Promise.all(userPromiseArr);

    })
    
  },

  down: (queryInterface, Sequelize) => {

    return db.Cart.destroy({where:{}});
  }
};
