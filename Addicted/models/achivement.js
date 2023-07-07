const mongoose =require("mongoose");
const achivementSchema = new mongoose.Schema({
    id_achivement:String,
    comm:String,
    type:String,
    enabled:Boolean,
    createdAt:Date,
    updatedAt:Date

    
},{
    timestamps : true
});
const achivement = mongoose.model("achivement",achivementSchema);
module.exports = achivement;