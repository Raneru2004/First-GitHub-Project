import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import PostReducer from './actions/postAction';

export default configureStore({
    reducer:{
        post: PostReducer,
    }
})

// const initialState={};
// const middleWare=[]
// const store= createStore(rootReducer, initialState, applyMiddleware(...middleWare));
// export default store;