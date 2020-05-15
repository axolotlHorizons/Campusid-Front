import { Reducer } from 'react';
import { Action } from 'redux';
import { SET_ERROR_PAGE, SET_COURSES, SET_USER, SET_IS_ADMIN } from './actions';

//The Reducer is listening to all dispatched actions
const commonReducer: Reducer<Record<string, any>, Action<any>> = (
    state: Record<string, any>,
    action: Record<string, any>
) => {
    switch (action.type) {
        case SET_ERROR_PAGE:
            return {
                ...state,
                errorPage: action.payload,
            };
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case SET_COURSES:
            return {
                ...state,
                courses: action.payload,
            };
        case SET_IS_ADMIN:
            return {
                ...state,
                isAdmin: action.payload,
            };

        default:
            return state;
    }
};

export default commonReducer;
