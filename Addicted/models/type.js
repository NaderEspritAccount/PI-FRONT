const mongoose =require("mongoose");
const typeSchema = new mongoose.Schema({
    id_type:String,
    name:String
    
},{
    timestamps : true
});
const type = mongoose.model("type",typeSchema);
module.exports = type;