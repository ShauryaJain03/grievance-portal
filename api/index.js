const express=require("express");
require('dotenv').config();
const jwt = require('jsonwebtoken');
const app=express();
const bcrypt=require("bcryptjs");
const cors=require("cors");
const mongoose=require("mongoose");

app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

/* mongoose.connect(process.env.MONGO_URL);
 */
app.post("/studentlogin",(req,res)=>{
    const {email,passwd}=req.body;
    console.log(email,passwd);
    res.json({email,passwd});
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

app.listen(4000,()=>{
    console.log("listening");
})