require("dotenv").config()

module.exports = {
  
  "development": {
    "username": "storeuser",
    "password": process.env.DBPASSWORD,
    "database": "database_development",
    "host": process.env.DBHOST,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "storeuser",
    "password": process.env.DBPASSWORD,
    "database": "database_test",
    "host": process.env.DBHOST,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "storeuser",
    "password": process.env.DBPASSWORD,
    "database": "database_production",
    "host": process.env.DBHOST,
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
