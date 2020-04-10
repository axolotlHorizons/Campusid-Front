//This file contains all selectors, they are used to get the content of the redux state

//Here we are targeting the locale
export const getUser = (state: Record<string, any>) => state?.user;

//Here we are targeting the backgroundColor
export const getBackgroundColor = (state: Record<string, any>) =>
    state.backgroundColor;
