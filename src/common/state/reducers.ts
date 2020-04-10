import { Reducer } from 'react';
import { Action } from 'redux';
import { SET_USER } from './actions';

//The Reducer is listening to all dispatched actions
const commonReducer: Reducer<Record<string, any>, Action<any>> = (
    state: Record<string, any>,
    action: Record<string, any>
) => {
    switch (action.type) {
        //If action SET_LOCALE
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                // The Reducer update the locale with the payload* provided in SET_LOCALE
            };

        default:
            return state;
    }
};

export default commonReducer;
