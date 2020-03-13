//This file contains all selectors, they are used to get the content of the redux state

//Here we are targeting the locale
export const getLocale = (state: Record<string, any>) => state.locale;

//Here we are targeting the backgroundColor
export const getBackgroundColor = (state: Record<string, any>) =>
    state.backgroundColor;

export const getSidebar = (state: Record<string, boolean>) => state.sidebar;
