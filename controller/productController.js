const products = require("../modules/data");

const getProducts = (req, res) => {
    res.json(products);
};

const addProduct = (req, res) => {
    const newProduct = req.body;

    if (!newProduct.id || !newProduct.name || !newProduct.price) {
        return res.json({ message: "Missing data" });
    }

    products.push(newProduct);

    res.json({
        message: "Product added",
        product: newProduct
    });
};

module.exports = { getProducts, addProduct };