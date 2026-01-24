 const express= express();
const app= express();
const PORT=3000;
const Path=require('path');


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

