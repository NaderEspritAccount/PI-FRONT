const mongoose =require("mongoose");


// const postSchema = new mongoose.Schema({
//     id_post: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true
//     },
//     // Rest of the schema fields
//   });

const postSchema = new mongoose.Schema({
    id_post:String,
    description:String,
    enabled:Boolean,
    createdAt:Date,
    updatedAt:Date,
    id_user:String,
    id_image:String,
    nbrlike:Number,
    nbrdlike:Number,
    enablelike:Boolean,
    enabdislike:Boolean,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comm' }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'like' }],
},{
    timestamps : true
});
const post = mongoose.model("post",postSchema);
module.exports = post;