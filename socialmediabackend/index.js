const express=require("express");
const app=express();
const mongoose= require("mongoose");
const userRoute=require("./routes/users")
const authRoute=require("./routes/auth")
const postRoute=require("./routes/posts")

mongoose.connect('mongodb://127.0.0.1:27017/socialmedia')

app.use(express.json());//middleware


app.use("/users",userRoute)
app.use("/auth",authRoute)
app.use("/posts",postRoute);

app.get("/",(req,res)=>{
    res.send("my home page")
})
app.get("/users",(req,res)=>{
    res.send("my users page")
})




app.listen(8080,()=>{
    console.log("ok!server is running")
})
