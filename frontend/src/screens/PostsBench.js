import React, {Fragment} from 'react'
import "./PostsBench.css";
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';


// Actions
import {getPosts as listPosts} from "../redux/actions/postActions";

//Screens
import PostScreen from "./PostScreen"


const PostsBench = ({postID, postTitle, postDate, postDesc}) => {

    const dispatch = useDispatch();
  
    const getPosts = useSelector((state) => state.getPosts);
    const {posts, loading, error} = getPosts;
  
    useEffect(() => {
      dispatch(listPosts());
    }, [dispatch]);
  
  if (posts) {
    console.log(posts);
  }

    return (
          
            <div className="postsTable_div">
              {/* {loading ? (
                  <h2>Loading...</h2>
                ) : error ? (
                  <h2>{error}</h2>
                ) : ( }*/}
                    <h3 className="page_title"> A student's notes on progress from the bench. </h3>
                    <table className = "postsTable">
                      {/* <thead>
                        <tr>
                          {/* <th className='postsTable_header'> <h3> </h3> </th> }
                        </tr>
                      </thead> */}
                      <tbody className="postsTable_body">
                        {posts.map((post) => {
                          return(
                          <Fragment>
                          <tr /*key={unique post.id*/className="posts_row">
                            
                            <td id='posts_date'> <Link to={`/post/${post.postTitle}`}> {post.postDate} </Link> </td>
                            <td id='posts_title'><Link to={`/post/${post.postTitle}`} title={post.postDesc}> {post.postTitle} </Link> </td>
                            {/* <td id='posts_desc'><Link to={`/post/${post._id}`}> {post.postDesc} </Link> </td> */}
                          </tr>
                          
                          </Fragment>
                          );
                        })}
                      </tbody>
                    </table>
            </div>
        
  )
  

}

export default PostsBench