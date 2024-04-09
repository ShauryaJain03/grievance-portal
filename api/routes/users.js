const express=require("express");
const Users=require("../models/Users.model");
const bcrypt = require('bcryptjs');

const router=express.Router();

router.post("/login",async (req,res)=>{
        const fetchUser=await Users.findOne({email:req.body.email});
        const isPasswordCorrect=(req.body.passwd===fetchUser.passwd);
        if(isPasswordCorrect){
            res.status(200).json(fetchUser);
        }else{
            res.send("wrong password");
        }
    
})



module.exports=router;  