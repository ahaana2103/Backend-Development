// const app= require("./app");
// app.listen(3000, () =>{
//     console.log("~Server running at port 3000");
// });

const express =require("express");
const app= express();
const customMiddleware=(req,res,next) =>{
    //Logic
    //If Success next()
    if(req.query.skip==true){
        next();
    }
    
    else res.send("Not authorized"){
        //If faliure res.send()
    }
}
app.use(customMiddleware);
app.use(express.json());

app.get("/home" ,(req,res)=>{
    res.send("Home Page")
});

const userRoutes= require("./routes/userRoutes");
const productRoutes= require("./routes/productRoutes");

app.use("/", userRoutes);
app.use("/", productRoutes);

app.listen(3000, ()=>{
    console.log("Server running at port 3000");
});