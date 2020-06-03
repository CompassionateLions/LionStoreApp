'use strict';

const db = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return db.User.bulkCreate([
      {
        email: "ben@fawcett.xyz",
        password: "12345678Lion",
        role: "admin"
      },
      {
        email: "ben@lionstore.com",
        password: "Benjamin123",
        role: "admin"
      },
      {
        email: "ziyen@lionstore.com",
        password: "Ziyen123",
        role: "admin"
      },
      {
        email: "ruma@lionstore.com",
        password: "Ruma1234",
        role: "admin"
      },
      {
        email: "karthik@lionstore.com",
        password: "Karthik123",
        role: "admin"
      },
      {
        email: "humphrey_bogart@test.com",
        password: "Humphrey123",
        role: "user"
      },
      {
        email: "ingrid_bergman@test.com",
        password: "Ingrid123",
        role: "user"
      },
      {
        email: "james_stewart@test.com",
        password: "James123",
        role: "user"
      },
      {
        email: "ginger_rodgers@test.com",
        password: "Ginger123",
        role: "user"
      },
      {
        email: "rita_hayworth@test.com",
        password: "Rita123",
        role: "user"
      },
      {
        email: "edward_robinson@test.com",
        password: "Edward123",
        role: "user"
      }
    ], {individualHooks: true})
    
  },

  down: (queryInterface, Sequelize) => {
    
    return db.User.destroy({where:{}})
    
  }
};
