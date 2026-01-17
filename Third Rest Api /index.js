const express = require("express");
const app = express();
const PORT = 3000;

//its your mock api
const users = [
  { id: 1, name: "mustafa" },

  { id: 2, name: "meerab" },

  { id: 3, name: "hassan"  },

  { id: 4, name: "ali"  },
];

//its your middleware
app.use((res, req, next) => {
  console.log(`${req.method}, ${req.url}`);
  next();
});
app.use(express.json());

 //GET/user/id --single user

 app.get('/users/id',(res,req)=>{
    const id=number(req.id.params);
    const  user=users.find(u => u.id===id );
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    res.json(user);
    });

//POST /user --create user
 app.post('/user',(res,req)=>{
    const {name}= req.body;
    if(!user){
        return res.status(404).json({message:"User name is required"});
        }
        const newUser={
            id:user.lenght+1,
            name,
        };
        users.push(newUser)
        res.status(202).json({newUser})
    });

    //DELETE/user/id --delete user
    app.delete('/user',(res,req)=>{
        const id= numbers(req.params.id);
        const index= users.findIndex(u=> u.id===id);
        if(index===-1){
            return res.status(404).json({message:"user not found"});
        }
        users.splice(index,1);
        res.json({message:"user deleted"}); 
    })