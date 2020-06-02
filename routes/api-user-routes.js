const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/user-controllers");
const {authenticateUser, checkAdmin} = require("../controllers/middlewear/check-auth-middlewear");


// ROOT URL = "/api/users"

//Signup
router.post("/signup", userControllers.signup)

//Login
router.post("/login", userControllers.login)

//Get info of specific user. Requires admin privilledges
router.get("/:id", authenticateUser, checkAdmin, userControllers.getUserInfo)

//Get info of the authenticated user
router.get("/", authenticateUser, userControllers.getAuthenticatedUser);




module.exports = router;