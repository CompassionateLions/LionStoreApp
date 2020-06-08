const express = require("express");
const router = express.Router();

const cartControllers = require("../controllers/cart-controllers");
const {authenticateUser, checkAdmin} = require("../controllers/middlewear/check-auth-middlewear");


//Root url = "/api/cart"

//Get cart for logged in user
router.get("/", authenticateUser, cartControllers.getCartAuthedUser);

//Update quantity of cart
router.put("/update", authenticateUser, cartControllers.updateCartQuantity);

//Add to cart
router.put("/add/:productId", authenticateUser, cartControllers.addProductToCart);

//Remove all items from cart
router.delete("/remove/all", authenticateUser, cartControllers.removeAllFromCart);

//Remove item from cart
router.delete("/remove/:productId", authenticateUser, cartControllers.removeFromCart);




module.exports = router;
