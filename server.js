const express= require("express");

const app= express();

// app.get("/", (req,res) => {
//     res.send("Server Setup done");
// });
// app.get("/home", (req,res) =>{
//     res.send("Home Page Done");
// });
// app.get("users/")

const userRoutes =require("./routes/userRoutes");


const customMiddleware = (req,res,next) =>{
    if(req?.params?.uid){
        return;
    }
    console.log("Middleware running");
    next();
    
};
app.use(customMiddleware)
app.use(express.json());
app.use("/", userRoutes);

app.listen(3000, () =>{
    console.log("Server running at port 3000");
});