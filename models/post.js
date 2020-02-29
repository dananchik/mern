const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    data:{
        type:Date,
        default:Date.now
    }
});

module.exports = Posts = mongoose.model('Post', PostSchema);