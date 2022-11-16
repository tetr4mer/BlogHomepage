const postModel = require("../models/postModelSchema");


const getAllPosts = async(req, res) => {
    try {
        const posts = await postModel.find({});
        res.json(posts);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({message: "Server Get All Posts Error"});
    }
}

const getPostById = async(req, res) => {
    try {
        const post = await postModel.findById(req.params.id); 
        
        res.json(post);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({message: "Server Get Post By ID Error"});
    }
}

module.exports = {
    getAllPosts,
    getPostById
}