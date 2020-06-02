const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/user-controllers");
const authMiddleWear = require("../controllers/middlewear/check-auth-middlewear");


// ROOT URL = "/api/users"

//Signup
router.post("/signup", userControllers.signup)

//Login
router.post("/login", userControllers.login)

//Get info of specific user. Requires adim privilledges
router.get("/:id", authMiddleWear.authenticateUser, userControllers.getUserInfo)

//Get info of the authenticated user
router.get("/", authMiddleWear.authenticateUser, userControllers.getAuthenticatedUser);




module.exports = router;