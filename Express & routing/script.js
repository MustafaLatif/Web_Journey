 const express= require('express');
 const app= express();
 app.use(function(req,res,next){
    console.log("Middleware 1 executed")
    next();
 });
 app.get("/",function(req,res){
    res.send("Hello First Express App")
 })
 app.get("/about",function(req,res,err){
    return next(new Error("Something went wrong"))
  })
 app.get("/profile",function(req,res,err){
    return next(new Error("Something went wrong"))
  })
 app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send ('Something broke!')
 })

  
 app.listen(8080);
