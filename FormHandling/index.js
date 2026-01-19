const express= require('express');
const app=express();
const Path=require('path');
const PORT=3000;

app.use(express.json());//parser
app.use(express.urlencoded({extended:true}));//parser
app.set('view engine','ejs');//template engine
app.use(express.static(Path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render("index");
});
app.get('/profile/:username', (req,res)=>{
    res.send(`Welcome, ${req.params.username}`);
});
app.get('/author/:username/:age', (req,res)=>{
    res.send(`Welcome, ${req.params.username} your age is ${req.params.age}`);
});
 
app.listen(PORT,()=>{
    console.log(`running server is https//localhost:${PORT}`)
})