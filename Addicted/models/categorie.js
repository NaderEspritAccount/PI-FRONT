const mongoose =require("mongoose");
const categorieSchema = new mongoose.Schema({
    id_categorie:String,
    name:String
    
},{
    timestamps : true
});
const categorie = mongoose.model("categorie",categorieSchema);
module.exports = categorie;