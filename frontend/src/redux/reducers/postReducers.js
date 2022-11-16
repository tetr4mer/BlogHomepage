import * as actionTypes from '../constants/postConstants'

export const getPostsReducer = (state = {posts: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_POSTS_REQUEST:
            return {
                loading: true,
                posts: []
            }
        case actionTypes.GET_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload
            }
        case actionTypes.GET_POSTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getPostDetailsReducer = (state = {post: {}}, action) => {
    switch(action.type) {
        case actionTypes.GET_POST_DETAILS_REQUEST:
            return {
                loading: true
            }
        case actionTypes.GET_POST_DETAILS_SUCCESS:
            return {
                loading: false,
                post: action.payload
            }
        case actionTypes.GET_POST_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_POST_DETAILS_RESET:
            return {
                product: {}
            }
        default: 
            return state;
    }
}

