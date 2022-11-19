const express = require('express');
const router = express.Router();

//importing from controllers....POST SECTION !
const {getAllPosts, getPostById, getPostByTitle} = require('../controller/postController.js');

//@desc GET all posts from db at '/' address OF API.......
//@route GET /api/posts.
//@access Public
router.get("/", getAllPosts);

router.get("/:title", getPostByTitle);

//@desc GET a single post from db at '/:id' address OF API......
//@route GET /api/posts/:id
//@access Public
router.get("/:id", getPostById); 




//importing from controllers.....Search Query SECTION!
// const {getAllSearches, getSearchById} = require('../controller/searchController');

// //@desc GET all queries from db
// //@route GET /api/queries
// //@access Public
// router.get('/searches', getAllSearches);



// //@desc GET a single query by id from db
// //@route GET /api/query/:id
// //@access Public
// router.get('/searches/:id', getSearchById) 



module.exports = router;