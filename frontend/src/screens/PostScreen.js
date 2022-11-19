import React from 'react';
import "./PostScreen.css";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router-dom";


import { getPostDetailsByTitle } from '../redux/actions/postActions';



const PostScreen = ({match}) => {

    const dispatch = useDispatch();
    const postDetails = useSelector((state) => state.getPostDetails);
    const {post, loading, error} = postDetails;

    const {title} = useParams();

    useEffect(() => {
    
      if (post && title !== post.postTitle) { //if post exists, and, id (in the URL) does not equal the returned post obj. id field then dispatch to getPostDetails with the URL id
        
        dispatch(getPostDetailsByTitle(title))

      }
    }, []);
    //dispatch, post, title
    console.log(post);
   
  return (
    <div className='postScreen'>
      {loading ? (<h2> Loading....</h2>) : error ? (<h2> Error....</h2>) : (
        <div className='postScreen_div'>
        
        
          <div id="background"> 
          <h1 className ="post_title">{post.title}</h1>
          <p></p>
          
          <main className="post_content">
            
            <div className='postcContent_div'>
              <p dangerouslySetInnerHTML={{ __html: post.content }}></p>

              {/*{post.postContent}  */} 
            </div>
            
          </main>
          
      
      
         
          </div>
      
        </div>
          )}
       

      
       

      

    </div>

  )
}

export default PostScreen