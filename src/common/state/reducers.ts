import { SET_LOCALE } from './actions';
import { SET_BACKGROUND_COLOR } from './actions';
import { Reducer } from 'react';
import { Action } from 'redux';

//The Reducer is listening to all dispatched actions
const commonReducer: Reducer<Record<string, any>, Action<any>> = (
    state: Record<string, any>,
    action: Record<string, any>
) => {
    switch (action.type) {
        //If action SET_LOCALE
        case SET_LOCALE:
            return {
                ...state,
                locale: action.payload,
                // The Reducer update the locale with the payload* provided in SET_LOCALE
            };
        case SET_BACKGROUND_COLOR: {
            return {
                ...state,
                backgroundColor: action.payload,
            };
        }

        default:
            return state;
    }
};

export default commonReducer;
