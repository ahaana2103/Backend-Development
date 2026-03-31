// const express = require("express");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const app = express();
// app.use(express.json());

// // AUTH MIDDLEWARE

// const authMiddleware = (req, res, next) => {
//     const token = req.headers.authorization?.split(" ")[1];

//     if (!token) {
//         return res.send("Token not available");
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         console.log("Decoded:", decoded);

//         req.user = decoded;
//         next();
//     } catch (err) {
//         return res.send("Token not valid");
//     }
// };

// //app.use(authMiddleware);

// const customMiddleware = (req, res, next) => {
//     console.log("Query:", req.query);

//     if (req.query.skip === "true") {
//         return next();
//     }
//     return res.send("Not authorized");
// };

// // ONLY for /home route
// app.get("/home", customMiddleware, (req, res) => {
//     res.send("Home Page");
// });

//ejs 
const express = require("express");
const app = express();

app.set("view engine", "ejs");

const homePageContent = {
    header : { title: "GLA header" },
    footer : { title: "GLA footer" },
    content: { title: "Main content" },
    data: {
        universityName: "GLA University",
        studentList: [
            { name: "Student 1", dept: "CSE" },
            { name: "Student 2", dept: "CSE" }
        ],
    },
};

app.get('/', (req, res) => {
    res.render("home", homePageContent);
});

// ROUTES
// const userRoutes = require("./routes/userRoutes");
// const productRoutes = require("./routes/productRoutes");
// const authRoutes = require("./routes/authRoutes");

// app.use("/", userRoutes);
// app.use("/", productRoutes);
// app.use("/", authRoutes);

module.exports = app;