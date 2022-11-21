import React from 'react';
import "./PostScreen.css";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import CodeBlock from "../components/CodeBlock"


import { getPostDetailsByTitle } from '../redux/actions/postActions';




const PostScreen = () => {


  
    const dispatch = useDispatch();
    const postDetails = useSelector((state) => state.getPostDetails);
    const {post, loading, error} = postDetails;
    const {title} = useParams();

    useEffect(() => {

      if (post && title !== post.postTitle) { //if post exists, and, id (in the URL) does not equal the returned post obj. id field then dispatch to getPostDetails with the URL id
        
        dispatch(getPostDetailsByTitle(title))

      }
    }, []);
    
    console.log(post ? post : "no post");
    // dispatch, post, title
    // console.log(post[0]?.postTitle);
    // console.log(post[0]?.postContent[0].paragraph);
    const contentArr = [];
    for (let i=0; i < post[0]?.postContent.length; i++) {
      //console.log(post[0].postContent[i].paragraph);
      contentArr.push([post[0].postContent[i].paragraph, post[0].postContent[i].paragraphCode ]);
      //console.log(post[0].postContent[i].paragraphCode);
      
    }       
    console.log(contentArr);

  return (
    <div className='postScreen'>
      {loading ? (<h2> Loading....</h2>) : error ? (<h2> Error....</h2>) : (
        <div className='postScreen_div'>
        
        
          <div id="background"> 
          <h1 className ="post_title">{post[0]?.postTitle}</h1>
          <p></p>
          
          <main className="post_content">
            
            
            <div className='postcContent_div'>
              
             {/* <p>{post[0]?.postContent[0].paragraph}</p>
             <p>{post[0]?.postContent[0].paragraphCode}</p> */}
             {contentArr?.map((post) => {
                  if (post[1]) {
                  return(
                    <div>
                    <p dangerouslySetInnerHTML={{ __html: post[0] }}></p> 
                    <CodeBlock codeString={post[1]}/> 
                    <br/>
                    </div>
                  )
                }
                else {
                  return (
                    <div>
                    <p dangerouslySetInnerHTML={{ __html: post[0] }}></p> 
                    <br/>
                    </div>
                  )
                }
             })}
             
            </div>
            
          </main>
          
      
      
         
          </div>
      
        </div>
          )}
    </div>

  )
}

export default PostScreen