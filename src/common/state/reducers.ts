import { Reducer } from 'react';
import { Action } from 'redux';
import {
    USER_LOGIN_IN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_LOGOUT,
    SET_ERROR_PAGE,
    SET_COURSES,
    SET_USER,
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
        case SET_ERROR_PAGE:
            return {
                ...state,
                errorPage: action.payload,
            };
        case USER_LOGIN_IN: {
            return {
                ...state,
                status: 'login',
            };
        }

        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                status: 'logged',
            };
        }
        case USER_LOGIN_ERROR: {
            return {
                ...state,
                error: 'Authentication error',
                status: 'logging failed',
            };
        }
        case USER_LOGOUT: {
            return null;
        }
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
