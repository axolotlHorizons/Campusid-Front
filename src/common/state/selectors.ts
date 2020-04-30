//This file contains all selectors, they are used to get the content of the redux state
export const getUserData = (state: Record<string, any>) => state?.user;
export const getErrorPage = (state: Record<string, any>) => state?.errorPage;
