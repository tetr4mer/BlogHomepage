import * as actionTypes from '../constants/postConstants';
import axios from "axios";







const url = "http://3.83.205.114:5000/api/posts";
const config = {
   url,
   headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
}

export const getPosts = () => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_POSTS_REQUEST }); 
        
        console.log(`Getting Data`);
        const { data } = await axios.get("/api/posts/");                                                                                                                     //PROBLEM STARTS HERE.
        console.log(`The data is: ${data}`);
        dispatch({
            type: actionTypes.GET_POSTS_SUCCESS, 
            payload: data
        })
        console.log(`Data was received.`);
    }
    catch(error) {
        dispatch({
            type: actionTypes.GET_POSTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const getPostDetails = (id) => async (dispatch) => {
    try {
        
        dispatch({ type: actionTypes.GET_POST_DETAILS_REQUEST }); 

        
        const { data } = await axios.get(`/api/posts/${id}`);

       
        dispatch({
            type: actionTypes.GET_POST_DETAILS_SUCCESS, 
            payload: data
        })
    }
    catch(error) {
        dispatch({
            type: actionTypes.GET_POSTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const removePostDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_POST_DETAILS_RESET
    })
}
