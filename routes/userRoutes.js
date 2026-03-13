const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users", userController.addUser);

module.exports = router;