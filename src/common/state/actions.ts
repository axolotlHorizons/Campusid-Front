export const SET_ERROR_PAGE = 'setErrorPage';
export const SET_CLASS = 'setClass';
export const SET_COURSES = 'setCourses';
export const SET_USER = 'setUser';

export function setErrorPage(data: boolean) {
    return { type: SET_ERROR_PAGE, payload: data };
}

export function setUser(data: Record<string, any>) {
    return { type: SET_USER, payload: data };
}

export function setCourses(data: Record<string, any>) {
    return { type: SET_COURSES, payload: data };
}
