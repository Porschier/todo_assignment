const mongoose=require ('mongoose');


const userSchema = new mongoose.Schema({
    first_name:String,
    last_name: String,
    date_of_birth: Date,
    school:Strimg
})
const userModel=mongoose.model('users',userSchema);
module.exports  = userModel;