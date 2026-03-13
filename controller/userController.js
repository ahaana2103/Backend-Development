// const users = require("../modules/userModules");

// const getUsers = (req, res) => {
//    // res.json(users);
//    const clientQuery =req.query;
//    console.log("~Client Query", clientQuery);
//    res.json(users);
// };
// exports.addUser =(req,res) =>{
//     console.log("~req:", req.body);
//     res.json(req.body);
// };
// exports.getUserById =(req, res) =>{
//     const userId=req.params.id;
//     let user={};
//     users.map((userDetails)=>{
//         id=userDetails["id"];
//         if(id==userId){
//             user=userDetails;
//         }
//     });
// }

// module.exports = { getUsers };

const users = require("../modules/userModules");

const getUsers = (req, res) => {
    const clientQuery = req.query;
    console.log("~Client Query:", clientQuery);
    res.json(users);
};

const addUser = (req, res) => {
    const newUser = req.body;

    users.push(newUser);   // add new user to array

    res.json({
        message: "User added successfully",
        user: newUser
    });
};

const getUserById = (req, res) => {
    const userId = req.params.id;

    const user = users.find((u) => u.id == userId);

    res.json(user);
};

module.exports = { getUsers, addUser, getUserById };