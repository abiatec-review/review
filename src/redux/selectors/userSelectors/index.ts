import { RootReducer } from "redux/reducers";

export const getUser = (state: RootReducer) => state?.userReducer;

export const getUserMail = (state: RootReducer) => getUser(state)?.email;
export const getUserError = (state: RootReducer) => getUser(state)?.error;
export const getUserLoading = (state: RootReducer) => getUser(state)?.isLoading;
