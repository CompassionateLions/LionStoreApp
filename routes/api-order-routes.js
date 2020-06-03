const express = require("express");
const router = express.Router();

const orderControllers = require("../controllers/order-controllers");
const {authenticateUser, checkAdmin} = require("../controllers/middlewear/check-auth-middlewear");


//Root url = "/api/order"


//Get all orders for authed users
router.get("/", authenticateUser, orderControllers.getAllOrdersForUser);

//Get all orders
router.get("/all", authenticateUser, checkAdmin, orderControllers.getAllOrders);

//Get specific order
router.get("/:orderId", authenticateUser, checkAdmin, orderControllers.getOrderById);

//Make order
router.post("/create", authenticateUser, orderControllers.makeOrder);


module.exports = router;
