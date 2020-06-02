const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/product-controllers");
const {authenticateUser, checkAdmin } = require("../controllers/middlewear/check-auth-middlewear");


// ROOT URL = "/api/products"

//Add new product, only accessible to admins
router.post("/", authenticateUser, checkAdmin, productControllers.createNewProduct);

//Get all products
router.get("/", productControllers.getAllProducts);

//Update a product, admin only
router.put("/", authenticateUser, checkAdmin, productControllers.updateProduct);

//Get info about single product
router.get("/:id", productControllers.getProductById);

module.exports = router;