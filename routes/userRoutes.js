const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.get("/users", userController.getUsers);
router.post("/users", userController.addUser);

//visible to end users
router.route("/users").get(userController.getUsers).post(userController.addUser);

module.exports = router;