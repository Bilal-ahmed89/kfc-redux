import { createStore, applyMiddleware, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { productsReducer } from "./productsReducer";
import thunkMiddleware from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))



const rootReducer = combineReducers({ 
    counters : counterReducer,
     products : productsReducer
    })



const store = createStore(counterReducer, composedEnhancer);

export default store;
