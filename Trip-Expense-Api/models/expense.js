const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    trip:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"trip",
        required:true,
    },
    amount:{
        type:Number,
        required:[true,"Amount is required"],
        min:[0,"Amount must be >=0"],
    },
    category:{
        type:String,
        required:[true,"category is required"],
        enum:["travel","accomodation","food","fun","others"],
        lowercase:true,
    },
    description:{
        type:String,
        maxlenght:200,
    },
    date:{
        type:Date,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now,
    },
});
//Middleware update `updateAt` on save
expenseSchema.pre("save",(next)=>{
    this.updatedAt=Date.now();
    next();
})
module.exports=mongoose.model("Expense", expenseSchema)