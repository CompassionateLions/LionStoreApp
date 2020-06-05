//Dependencies
var express = require('express');
require ('dotenv').config();

const path = require('path');

// Sets up the Express App
var app = express();

var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const productRoutes = require("./routes/api-product-routes");
const userRoutes = require("./routes/api-user-routes");
const orderRoutes = require("./routes/api-order-routes");
const cartRoutes = require("./routes/api-cart-routes");

// require("./controllers/api-routes.js")(app);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);

//Handle Prod
if(process.env.NODE_ENV === 'production'){
  //set static
  // Static directory
  app.use(express.static(path.join(__dirname, "public")));

  app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));
}


// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
      // require("./controllers/seeds")();
      
    });
  });