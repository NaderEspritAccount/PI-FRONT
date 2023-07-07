const mongoose =require("mongoose");
const eventSchema = new mongoose.Schema({

    id_event:String,
    name:String,
    description:String,
    nbr_user:Number,
    date_debut:Date,
    date_fin:Date,
    enabled:Boolean,
    createdAt:Date,
    updatedAt:Date,
    id_user:String,
    id_image:String
},{
    timestamps : true
});
const event = mongoose.model("event",eventSchema);
module.exports = event;