export const SET_USER = 'setUser';

export function setUser(data: string) {
    return { type: SET_USER, payload: data };
}
