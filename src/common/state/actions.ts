export const SET_LOCALE = 'setLocale';
export const SET_BACKGROUND_COLOR = 'setBackgroundColor';
export const SET_PATHNAME = 'setPathname';

export function setLocale(data: string) {
    return { type: SET_LOCALE, payload: data };
}
