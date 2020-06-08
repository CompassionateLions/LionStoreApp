const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/user-controllers");
const {authenticateUser, checkAdmin} = require("../controllers/middlewear/check-auth-middlewear");


// ROOT URL = "/api/users"

//Signup
router.post("/signup", userControllers.signup);

//Login
router.post("/login", userControllers.login);

//Get All users. Admin only
router.get("/all", authenticateUser, checkAdmin, userControllers.getAllUsers);

//Get info of specific user. Requires admin privilledges
router.get("/:id", authenticateUser, checkAdmin, userControllers.getUserInfo);

//Get info of the authenticated user
router.get("/", authenticateUser, userControllers.getAuthenticatedUser);

//Change password route
router.put("/password", authenticateUser, userControllers.updatePassword);





module.exports = router;