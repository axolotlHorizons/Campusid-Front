//@ts-nocheck

import { createStore, compose } from 'redux';
import commonReducer from './common/state/reducers';

const initialState = {
    locale: 'fr',
};

export default createStore(
    commonReducer,
    initialState,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
