//Dependencies
const express = require('express');
const bodyParser = require('body-parser')

// Sets up the Express App
const app = express();
app.use(bodyParser.json())

const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./controllers/api-controllers.js")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });