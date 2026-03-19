const express = require("express");
const router = express.Router();

const controller = require("../controller/productController");

router.get("/products", controller.getProducts);
router.post("/products", controller.addProduct);

module.exports = router;