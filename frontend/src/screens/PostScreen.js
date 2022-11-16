import React from 'react';
import "./PostScreen.css";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router-dom";


import { getPostDetails } from '../redux/actions/postActions';



const PostScreen = ({match}) => {

    const dispatch = useDispatch();
    const postDetails = useSelector((state) => state.getPostDetails);
    const {post, loading, error} = postDetails;

    const {id} = useParams();

    useEffect(() => {
    
     
      if (post && id !== post._id) {
        
        dispatch(getPostDetails(id))

      }
    }, [dispatch, id, post]);
    
  return (
    <div className='postScreen'>
      {loading ? (<h2> Loading....</h2>) : error ? (<h2> Error....</h2>) : (
        <div className='postScreen_div'>
          <body>
        
          <div id="background"> 
          <h1 className ="post_title">{post.postTitle}</h1>
          <p></p>
          
          <content className="post_content">
            
            <div className='postcContent_div'>
              <p dangerouslySetInnerHTML={{ __html: post.postContent }}></p>

              {/*{post.postContent}  */} 
            </div>
            
          </content>
          
      
      
         
          </div>
        </body>
        </div>
          )}
       

      
       

      

    </div>

  )
}

export default PostScreen