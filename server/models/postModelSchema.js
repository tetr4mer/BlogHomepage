const mongoose = require("mongoose");


const postsSchema = new mongoose.Schema({
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
    postContent: [{
        paragraph: 
            {type: String, required: true},
        paragraphCode:
            {type: String, required: false}
        }]
});

const postModel = mongoose.model('posts', postsSchema);

module.exports = postModel;