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
   res.json(users);
};

const addUser = (req, res) => {
   const { id, name } = req.body;

   if (!id || !name) {
      return res.status(400).json({
         message: "User data missing"
      });
   }

   users.push({ id, name });

   res.status(201).json({
      message: "User created",
      user: { id, name }
   });
};

module.exports = { getUsers, addUser };