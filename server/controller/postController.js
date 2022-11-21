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
        console.log(`The getPostByID param is: ${req.params.id}`);
        
         const post = await postModel.findById(req.params.id); 
        

        res.json(post);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({message: "Server Get Post By ID Error"});
    }
}


const getPostByTitle = async(req,res) => {
    try {
        const postByTitle = await postModel.find({
            postTitle: req.params.title
        });
    
        res.json(postByTitle);
    }

    catch(error) {
        console.error(error);
        res.status(500).json({message: "Server Get Post By Title Error"});
    }
    
}




module.exports = {
    getAllPosts,
    getPostById,
    getPostByTitle
}