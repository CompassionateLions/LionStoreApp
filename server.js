//Dependencies
var express = require('express');

// Sets up the Express App
var app = express();

var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
const productRoutes = require("./routes/api-product-routes");
const userRoutes = require("./routes/api-user-routes");
const orderRoutes = require("./routes/api-order-routes");

// require("./controllers/api-routes.js")(app);
app.use("/api/products", productRoutes);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({force:true}).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
      require("./controllers/test")();
      
    });
  });