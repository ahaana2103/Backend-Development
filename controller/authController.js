// exports.generateToken((req, res) => {
// const token= " ";
// res.json(token);
// });

const jwt=require("jsonwebtoken")
require("dotenv").config()
const jwtToken=process.env.jwtToken

exports.generateToken=(req,res) =>{
    const { username, email} =req.query;
    const token=jwt.sign({username, email},jwtToken)
    res.json({token});
};