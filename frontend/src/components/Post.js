import React from 'react';
import './Post.css';
import {Link} from 'react-router-dom';


const Post = ({title, date, description, id}) => {
  const dateString = {date};
  
  return (
    <div className="post">
          
          <div className="post_info">
            <Link  to={`/post/${id}`}> <i className="fa-regular fa-folder-open"> </i> </Link>

            <p id='info_date'>
              {date}
            </p>
            <div className="spacer_div"></div>
            <Link  to={`/post/${id}`} className='info_button' id='info_title'> 
            {title} 
            </Link>  
            
          </div>
        
          <p id="info_description">
                {description}
            </p>
            
       
            
        </div>
       
   
  )
}

export default Post