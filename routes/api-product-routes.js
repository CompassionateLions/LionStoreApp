const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/product-controllers");


// ROOT URL = "/api/products"


router.post("/", productControllers.createNewProduct);

router.get("/", productControllers.getAllProducts);

router.put("/", productControllers.updateProduct);

router.get("/:id", productControllers.getProductById);



module.exports = router;