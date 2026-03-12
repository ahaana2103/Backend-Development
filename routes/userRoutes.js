const express = require("express");
const routes = express.Router();

const userController = require("../controller/userController");

routes.get("/users", userController.getUsers);

module.exports = routes;