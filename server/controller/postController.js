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
        // api_postTitle = post.postTitle;
        // console.log(`The title of getpostbyid is param is: ${api_postTitle}`);

        // const postByTitle = await postModel.find({'postTitle': api_postTitle});
        // console.log(`The postByTitle value returned is ${postByTitle}`);

        res.json(post);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({message: "Server Get Post By ID Error"});
    }
}


const getPostByTitle = async(req,res) => {
    try {
        const postByTitle = await postModel.find({postTitle: req.params.title});
        // console.log(postByTitle);
        console.log(postByTitle[0].postTitle);
        let postByTitleObj = {
            title: `${postByTitle[0].postTitle}`,
            content: `${postByTitle[0].postContent}`
        }
        res.json(postByTitleObj);

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