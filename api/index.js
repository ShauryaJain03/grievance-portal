require('dotenv').config()
const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const grievanceRoute=require("./routes/grievance")
const app=express();
app.use(express.json());


async function db(){
    const connection=await mongoose.connect(process.env.MONGO_URL);
    console.log(connection.connection.port);
}

try{
    db();
}catch(err){
    console.log(err);
}

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.get("/",(req,res)=>{
    res.send("ye lo server bc");
})

app.use("/api/grievance",grievanceRoute);

app.listen(8000,()=>{
    console.log("listening on 8000");
})

