require("dotenv").config()

module.exports = {
  
  "development": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASSWORD,
    "database": process.env.DBNAME,
    "host": process.env.DBHOST,
    "dialect": "mysql",
    "operatorsAliases": false,
    "port": process.env.DBPORT
  },
  "test": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASSWORD,
    "database": process.env.DBNAME,
    "host": process.env.DBHOST,
    "dialect": "mysql",
    "operatorsAliases": false,
    "port": process.env.DBPORT
  },
  "production": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASSWORD,
    "database": process.env.DBNAME,
    "host": process.env.DBHOST,
    "dialect": "mysql",
    "operatorsAliases": false,
    "port": process.env.DBPORT
  }
}
