//This file contains all selectors, they are used to get the content of the redux state
export const getUserData = (state: Record<string, any>) => state?.user;
export const getProfileImage = (state: Record<string, any>) =>
    state?.user?.avatar?.image;
export const getErrorPage = (state: Record<string, any>) => state?.errorPage;
export const getIsAdmin = (state: Record<string, any>) => state?.isAdmin;
