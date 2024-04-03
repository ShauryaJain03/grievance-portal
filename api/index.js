require('dotenv').config()
const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");

const app=express();

mongoose.connect(process.env.MONGO_URL);

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


app.post("/studentlogin",async (req,res)=>{
    const {email,passwd}=req.body;
    console.log(email,passwd);
    const newUser=await User.create({
        email,
        passwd
    })
    res.json(newUser);
})

app.post("/adminlogin",(req,res)=>{
    const {email,passwd}=req.body;
    console.log(email,passwd);
    res.json({email,passwd});
})

app.post("/newGrievance",(req,res)=>{
    const {type,desc,image}=req.body;
    console.log(type,desc);
    res.json({type,desc});
})

app.listen(8000,()=>{
    console.log("listening on 8000");
})