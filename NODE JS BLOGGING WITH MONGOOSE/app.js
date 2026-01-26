const express= express();
const app= express();
const PORT=3000;
const Path=require('path');
const mongoose =require('mongoose');
const userRoute= require('./routes/user')

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/blogify').then(e => console.log("MongoDB Connected"));

app.set("view engine","ejs")
app.set("views",Path.resolve('./views'))

app.get('/',(req,res)=>{
    res.render('home')
})

app.use('/user',userRoute)

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
 })