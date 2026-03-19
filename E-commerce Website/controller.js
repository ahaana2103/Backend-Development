const products = require("./data");

// GET all products
const getProducts = (req, res) => {
    res.json(products);
};

// POST add product
const addProduct = (req, res) => {
    const newProduct = req.body;

    if (!newProduct.id || !newProduct.name || !newProduct.price) {
        return res.json({ message: "Missing product data" });
    }

    products.push(newProduct);

    res.json({
        message: "Product added",
        product: newProduct
    });
};

module.exports = { getProducts, addProduct };