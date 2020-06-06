'use strict';

const db = require("../models");

const movieSeeds = require("../controllers/misc/moveiSeeds");

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return db.Product.bulkCreate(movieSeeds)

  },

  down: (queryInterface, Sequelize) => {
    
    return db.Product.destroy({where:{}});
  }
};
