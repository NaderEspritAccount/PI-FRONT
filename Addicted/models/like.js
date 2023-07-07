const mongoose =require("mongoose");
const commSchema = new mongoose.Schema({
    nbrlike:Number,
    nbrdlike:Number,
    enablelike:Boolean,
    enabdislike:Boolean,
    createdAt:Date,
    id_user:String,
    id_post:String,
    id_post: { type: mongoose.Schema.Types.ObjectId, ref: 'post' },
},{
    timestamps : true
});
const like = mongoose.model("like",commSchema);
module.exports = like;