const mongoose =require('mongoose');
mongoose.connect( 'mongodb://url_mongodb/testapp1');
const userSchema=mongoose.Schema({
    image:String,
    email:String,
    name:String
})
module.exports=mongoose.model('user',userSchema);