import { uploadAvatar } from 'api';

export const SET_ERROR_PAGE = 'setErrorPage';
export const SET_CLASS = 'setClass';
export const SET_COURSES = 'setCourses';
export const SET_USER = 'setUser';
export const SET_IS_ADMIN = 'setAdmin';
export const UPDATE_AVATAR = 'updateAvatar';
export const UPDATE_AVATAR_SUCCESS = 'updateAvatarSuccess';
export const UPDATE_AVATAR_ERROR = 'updateAvatarError';
export const USER_LOGIN_SUCCESS = 'userLoginSuccess';
export const USER_LOGIN_ERROR = 'userLoginError';
export const USER_LOGOUT = 'userLogout';
export const USER_LOGIN_IN = 'userLoginIn';

export function userLogin() {
    return { type: USER_LOGIN_IN };
}
export function userLoginSuccess(data: {}) {
    return { type: USER_LOGIN_SUCCESS, payload: data };
}
export function userLoginError() {
    return { type: USER_LOGIN_ERROR };
}
export function userLogout() {
    return { type: USER_LOGOUT };
}

export function setErrorPage(data: boolean) {
    return { type: SET_ERROR_PAGE, payload: data };
}

export function setAdmin(data: boolean) {
    return { type: SET_IS_ADMIN, payload: data };
}

export function setUser(data: Record<string, any>) {
    return { type: SET_USER, payload: data };
}

export function setCourses(data: Record<string, any>) {
    return { type: SET_COURSES, payload: data };
}

export const updateAvatar = (
    data: string | null,
    userId: any | null,
    onClose: (() => void) | null = null
) => (dispatch: any) => {
    try {
        dispatch({
            type: UPDATE_AVATAR,
            payload: {
                avatarUploading: true,
                avatarUploadError: false,
            },
        });
        uploadAvatar(data, userId).then((res: string) => {
            dispatch({
                type: UPDATE_AVATAR_SUCCESS,
                payload: {
                    image: data,
                    avatarUploading: false,
                },
            });
        });
    } catch (err) {
        console.log(err);

        dispatch({
            type: UPDATE_AVATAR_ERROR,
            payload: {
                avatarUploading: false,
                avatarUploadError: true,
            },
        });
    }
    if (!!onClose) onClose();
};
