const express = require("express");
const router = express.Router();

const cartControllers = require("../controllers/cart-controllers");
const authMiddleWear = require("../controllers/middlewear/check-auth-middlewear");


//Root url = "/api/cart"

//Get cart for logged in user
router.get("/", authMiddleWear.authenticateUser, cartControllers.getCartAuthedUser);

//Add to cart
router.put("/:productId", authMiddleWear.authenticateUser, cartControllers.addProductToCart);

//Remove item from cart




module.exports = router;
