// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET all Products
  app.get("/api/products", function(req, res) {
    db.Products.findAll({}).then(function(results) {
      res.json(results);
    });
    
  });

   // GET one Product by id
   app.get("/api/products/:id", function(req, res) {
    db.Products.findOne({
        where:{
            id: req.params.id,
        }
    }).then(function(results) {
      res.json(results);
    });
  });

   // Get a specific product
   app.get("/api/:products", function(req, res) {
    db.Products.findAll({
        where:{
            name: req.params.Products,
        }
    }).then(function(results) {
      res.json(results);
    });
  });

    // POST Product
    app.post('api/products', (req, res) => {
      db.Products.create({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        isAvailable: req.body.isAvailable,
        description: req.body.description,
        genre: req.body.genre,
        image_url: req.body.image_url
      })
        .then(newProducts => {
          res.json(newProducts);
        })
    });

    // POST Product
    app.post('api/carts/add', (req, res) => {
      db.Cart.create({
        quantity: req.body.quantity,
        price: req.body.price,
        instanceSubtotal: req.body.instanceSubtotal
      })
        .then(newCart => {
          res.json(newCart);
        })
    });

//Create New user
    app.post('api/user', (req, res) => {
      db.User.create({
        email: req.body.email,
        password: req.body.password,
      })
        .then(newUser => {
          res.json(newUser);
        })
    });

//DELETE Cart
app.delete('/api/cart/:id', (req, res) => {
    db.Cart.destroy({
      where: { 
        id: req.params.id}
    })
      .then(deletecart => {
        res.end(deletecart);
      });
  });

  //POST Order Create
  app.post('api/order/create', (req, res) => {
    db.User.create({
      quantity: req.body.quantity,
      price: req.body.price,
      instanceSubtotal: req.body. instanceSubtotal

    })
      .then(newOrder => {
        res.json(newOrder);
      })
  });

}
