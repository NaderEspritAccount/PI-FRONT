const mongoose =require("mongoose");
const avisSchema = new mongoose.Schema({
    avis:String,
    description:String,
    createdAt:Date,
    id_post:String  
    
},{
    timestamps : true
});
const avis = mongoose.model("avis",avisSchema);
module.exports = avis;