import {applyMiddleware, compose, createStore} from 'redux';
import thunk from "redux-thunk";
import rootReducers from './reducers';

export const returnStore = (initialState) => {
    const middlewareEnhancer =applyMiddleware(thunk);
    const composedEnhancers = compose(middlewareEnhancer);
    return createStore(rootReducers, initialState, composedEnhancers);
}