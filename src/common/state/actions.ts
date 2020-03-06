// This kind of export is used by the Reducer
export const SET_LOCALE = 'setLocale';
export const SET_BACKGROUND_COLOR = 'setBackgroundColor';

// We export the action setLocale, it will be used in a React Component
export function setLocale(data: string) {
    return { type: SET_LOCALE, payload: data };
}

export function setBackgroundColor(data: number[]) {
    return { type: SET_BACKGROUND_COLOR, payload: data };
}
