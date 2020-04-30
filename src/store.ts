//@ts-nocheck

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import commonReducer from './common/state/reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialReduxState = {};

const store = createStore(
    commonReducer,
    initialReduxState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
