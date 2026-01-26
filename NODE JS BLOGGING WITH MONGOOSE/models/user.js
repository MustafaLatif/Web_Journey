const {createHmac, randomBytes}= require("node:crypto")
const mongoose= require('mongoose');
const {Schema,model}= require('mongoose');
// const { Profiler } = require('react');
const userSchema = userSchema({

    fullName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
    },
    role:{
        type:String,
        enum:["USER","ADMIN"],
    },
    ProfileUrl:{
        default:"/images/download.png",
    },
    salt:{
        type:String,
    },
},
    {timestamps:true},
);

userSchema.pre("save", function(next){
    const user=this;
    if(user.isModified("password"))return;
    const salt=randomBytes(16).toString("hex");
    const hashedPassword=createHmac("sha256",salt)
    .update(user.password)
    .digest("hex")
    this.salt=salt;
    this.password=hashedPassword;
    next();
});
userSchema.static('matchPassword',async function(email,password){
    const user =await  this.findone({email});
    if(!user) throw new Error("User not found!");
    if(!user) return false;
    const salt=user.salt;
    const hashedPassword=user.password;
    const userProvidedHash= createHmac("sha256",salt)
    .update(user.password)
    .digest("hex");
    if(hashedPassword != userProvidedHash) throw new Error('incorrect password')
    return {...user._doc,password:undefined, salt: undefined}
})
 const User=model("User",userSchema);
 module.exports=User;