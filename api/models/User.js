const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    email:{type:String,unique:true},
    passwd:String
})

const userModel=mongoose.model('User',userSchema);

module.exports=userModel