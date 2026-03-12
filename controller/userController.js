const users = require("../modules/userModules");

const getUsers = (req, res) => {
    res.json(users);
};

module.exports = { getUsers };