const express = require("express");
const Router = express.Router();
const Post = require("../../models/post");

Router.get('/posts',(req,res)=>{
    Post.find().then(items=>{
        res.json(items);
    })
});
Router.post('/posts',(req,res)=>{
    const newPost = new Post({
        title:req.body.title,
        content:req.body.content
    });
    newPost.save().then(
        res.json({
            message:"success"
        })
    )
    
});

module.exports = Router;