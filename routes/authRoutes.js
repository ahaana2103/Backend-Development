const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.get("/login", authController.generateToken);

module.exports = router;