const express=require("express");
const Grievance=require("../models/Grievance.model");

const router=express.Router();

router.post("/",async (req,res)=>{
    const newGrievance=new Grievance(req.body);
    try{
        const savedGrievance=await newGrievance.save();
        res.status(200).json(savedGrievance);
    }catch(err){
        res.status(500).json(err.message);    
    }
})

router.get("/",async (req,res)=>{
    try{
        const fetchedGrievances=await Grievance.find();
        res.status(200).json(fetchedGrievances);
    }catch(err){
        res.status(500).send(err.message);
    }
})

router.put("/:id",async (req,res)=>{
    try{
        const updatedGrievance=await Grievance.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updatedGrievance);
    }catch(err){
        res.status(500).send(err.message);
    }
})

router.get("/:id",async (req,res)=>{
    try{
        const fetchedGrievance=await Grievance.findById(req.params.id);
        res.status(200).json(fetchedGrievance);
    }catch(err){
        res.status(500).send(err.message);
    }
})

router.delete("/:id",async (req,res)=>{
    try{
        await Grievance.findByIdAndDelete(req.params.id);
        res.status(200).json("Grievance Deleted");    
    }catch(err){
        res.status(500).send(err.message);
    }
})
module.exports=router;  