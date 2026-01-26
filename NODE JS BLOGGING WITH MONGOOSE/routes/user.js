const { Router } = require("express");
const user= require('../models/user');
const router= Router();

router.get('/signup',(req,res)=>{
    return res.render("signup")
})

router.get("/signin",(req,res)=>{
    return res.render("signin")
})
router.post('/signin', async(req,res)=>{
    const {email,password}= req.body;
    const isMatched= user.matchPassword(email,password)
    console.log('user',user)
    return res.redirect('/')
})
router.post('/',async(req,res)=>{
    const{ fullName, email, password} =req.body;
    await user.create({
        fullName,
        email,
        password,
    });
    return  res.redirect('/')
})
module.exports=router;