const express= require('express');
const app = express();
const port = 3000;
const Path=require('path')
const userModel= require('./models/user');
const { create } = require('domain');
// Middleware to parse JSON bodies
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(Path.join(__dirname,'public')))
// Sample route
app.get('/', (req, res) => {
  res.render("index");
});
app.get('/read', (req, res) => {
  res.render("read");
});
app.post('/create', async (req, res) => {
  let {user,username,image}=req.body
 let createdUser=await userModel.create({
    naam,
    email,
    image

  });
  res.send(createdUser);
 });

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});