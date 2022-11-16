import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';



//ex. import { cartReducer} from './reducers/cartReducers';
import {getPostsReducer, getPostDetailsReducer} from "./reducers/postReducers";




const reducer = combineReducers({
    getPosts: getPostsReducer,
    getPostDetails: getPostDetailsReducer
})

const middleware = [thunk]; //helps to make async requests in our actions (redux-saga?)

const store = createStore( 
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);






export default store;


