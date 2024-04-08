const mongoose=require("mongoose");

const grievanceSchema=new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  postedBy: {
    type: String,
    required: true,
  },
  escalated: {
    type: Boolean,
  },
  finalDecision: {
    type: String,
  },
  relatedImages: {
    type: String,
  },
  status: {
    type: String,
  },
  postedOn:{
    type: Date,
  }
})

const grievanceModel=mongoose.model('Grievance',grievanceSchema);

module.exports=grievanceModel