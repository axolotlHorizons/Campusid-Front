import { Reducer } from 'react';
import { Action } from 'redux';
import {
    USER_LOGIN_IN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    FETCH_CURRENT_USER,
    FETCH_CURRENT_USER_SUCCESS,
    FETCH_CURRENT_USER_ERROR,
    USER_LOGOUT,
    SET_ERROR_PAGE,
    SET_COURSES,
    SET_IS_ADMIN,
    UPDATE_AVATAR,
    UPDATE_AVATAR_SUCCESS,
    UPDATE_AVATAR_ERROR,
} from './actions';

//The Reducer is listening to all dispatched actions
const commonReducer: Reducer<Record<string, any> | null, Action<any>> = (
    state: Record<string, any> | null,
    action: Record<string, any>
) => {
    switch (action.type) {
        case USER_LOGIN_IN: {
            return {
                ...state,
                user: action.payload,
            };
        }

        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
            };
        }
        case USER_LOGIN_ERROR: {
            return {
                ...state,
            };
        }

        case FETCH_CURRENT_USER: {
            return {
                ...state,
                user: action.payload,
            };
        }

        case FETCH_CURRENT_USER_SUCCESS: {
            return {
                ...state,
                user: action.payload,
            };
        }

        case FETCH_CURRENT_USER_ERROR: {
            return {
                ...state,
                error: 'Failed fetching current user',
            };
        }

        case USER_LOGOUT: {
            return null;
        }

        case SET_ERROR_PAGE:
            return {
                ...state,
                errorPage: action.payload,
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
        case UPDATE_AVATAR:
            return {
                ...state,
                user: {
                    ...state?.user,
                    avatar: action.payload,
                },
            };
        case UPDATE_AVATAR_SUCCESS: {
            return {
                ...state,
                user: {
                    ...state?.user,
                    avatar: action.payload,
                },
            };
        }
        case UPDATE_AVATAR_ERROR: {
            return {
                ...state,
                user: {
                    ...state?.user,
                    avatar: action.payload,
                },
            };
        }

        default:
            return state;
    }
};

export default commonReducer;
