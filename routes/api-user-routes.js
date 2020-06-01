const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/user-controllers");


// ROOT URL = "/api/users"

//Signup
router.post("/signup", userControllers.signup)

//Login
router.post("/login", userControllers.login)

//Get user info
router.get("/:id", userControllers.getUserInfo)




module.exports = router;