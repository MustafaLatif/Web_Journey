const mongoose=require('mongoose');
const {schema,model}= userSchema({
    fullName:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profileUrl:{
        type:String,
        // default:"/images/download.png",
    },
    role:{
        enum:["ADMIN","USER"],
        default:"USER",
        type:String,
    },
    salt:{
        type:String,
    },
},
    {timestamps:true,}
);
userSchema.pre("save",function(next){
    const user=this;
    if(user.isModified("password")) return;
    const salt =randomBytes(29).toString("hex");
    const hashedpassword=createHmac("sha256",salt)
    .update(user.password)
    .digest("hex")
    this.password=hashedpassword;
    next()
});
userSchema.static('matchpassword',async function(email,password){
    const user=await this.findone({email});
    if(!user) throw new Error("User not found")
        if(!user) return false;
    const salt= user.salt;
    const hashedpassword=user.password;
    const userProvidedHash =createHmac("sha256",salt)
    .update(user.password)
    .digest("hex")
    if(hashedpassword!==userProvidedHash) throw new Error('incorrect password')
    return{...user._doc,password:undefined,salt:undefined}
})
const User=model("User",userSchema);
module.exports = User;
