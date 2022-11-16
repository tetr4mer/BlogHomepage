const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    postID: {
        type: String,
        required: true
    },
    postDate: {
        type: String,
        required: true
    },
    postTitle: {
        type: String,
        required: true 
    },
    postDesc: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        required: true
    }
});

const postModel = mongoose.model('posts', postSchema);

module.exports = postModel;