const express= require('express');
const app = express();
require('dotenv').config()
const connectDB=require('./config/db');
const tripRoutes=require("./routes/tripRoutes")
const expenseRoute=require("./routes/expenseRoute")
//mount routes
app.use('/api/trips',tripRoutes)
app.use('/api.expense',expenseRoute)
//simple test route
app.get('',(req,res)=>{
  res.json({message:"trip expense tracker"})
})
//error handling middleware at the end 
app.use((err,req,res,next)=>{
  console.error(err.stack);
  res.status(500).json({error:"something went wrong!"})
});
//connect to db and start server
connectDB();
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
  console.log(`server running on port ${PORT}`)
});
module.exports=app;


 