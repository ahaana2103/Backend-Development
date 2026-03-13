// const express= require("express");

// const app= express();

// app.get("/", (req,res) => {
//     res.send("Server Setup done");
// });
// app.get("/home", (req,res) =>{
//     res.send("Home Page Done");
// });
// app.get("users/")

const express = require("express");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());

const customMiddleware = (req, res, next) => {
    if (req?.params?.uid) {
        return next();
    }

    console.log("Middleware running");
    next();
};

app.use(customMiddleware);
app.use("/", userRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});