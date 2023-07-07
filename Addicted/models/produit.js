const mongoose =require("mongoose");
//const user_id = require('./User');
const image_id = require('./image');
const produitSchema = new mongoose.Schema({
    id_produit:String,
    prix:Number,
    description:String,
    disponibilite:Boolean,
    quantite:Number,
    enabled:Boolean,
    createdAt:Date,
    updatedAt:Date,
    is_image:String,
    //id_user:user_id
    
},{
    timestamps : true
});
const produit = mongoose.model("produit",produitSchema);
module.exports = produit;