const express = require("express");
const userRoutes = require("./routes/userRoutes"); //old routes
const productRoutes = require("./routes/productRoutes"); // new ecommerce routes

const app = express();

app.use(express.json());

// middleware (optional)
const customMiddleware = (req, res, next) => {
    console.log("Middleware running");
    next();
};

app.use(customMiddleware);

// routes
app.use("/", userRoutes);     // existing
app.use("/", productRoutes);  // new

app.listen(3000, () => {
    console.log("Server running at port 3000");
});