// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all Products
  app.get("/api/products", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });


   // GET route for getting specific Product
   app.get("/api/products?:id", function(req, res) {
    // findOne returns input product id
    db.Users.findOne({
        where:{
            id:  req.params.id,
        }

    }).then(function(dbUsers) {
      res.json(dbUser);
    });
  });
}