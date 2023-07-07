const mongoose =require("mongoose");
const imageSchema = new mongoose.Schema({
    
    id_image:String,
    name:String
},{
    timestamps : true
});
const image = mongoose.model("image",imageSchema);
module.exports = image;