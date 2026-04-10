const express = require("express");
const router = express.Router();

const { addUser } = require("../controller/userController");
// POST /users
router.post("/student", addUser);

module.exports = router;