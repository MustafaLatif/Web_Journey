const mongoose=require('mongoose');
const tripSchema=new mongoose.Schema({
    name:{
    type:String,
    required:[true,"Name is required"],
    trim:true,
    maxlenght:100
},
 
createdAt:{
    type:Date,
    default:Date.now,
},
updatedAt:{
    type:Date,
    default:Date.now,
},
});
//Middleware:update `updatedAt` on save
tripSchema.pre("save",function(next){
    this.updatedAt=Date.now();
    next()
});
module.exports=mongoose.model("trip",tripSchema);