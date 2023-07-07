const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    role : String,
    enabled : Boolean,
    // id_image:String
},{
    timestamps : true
});

const user = mongoose.model("User",userSchema);
module.exports = user;
