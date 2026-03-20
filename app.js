const express = require("express");
const app = express();

app.use(express.json());

// middleware
const customMiddleware = (req, res, next) => {
    console.log("Query:", req.query);

    if (req.query.skip === "true") {
        return next();
    }
    return res.send("Not authorized");
};

// ONLY for /home
app.get("/home", customMiddleware, (req, res) => {
    res.send("Home Page");
});

// other routes (NO middleware here)
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

app.use("/", userRoutes);
app.use("/", productRoutes);

module.exports = app;