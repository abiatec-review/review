import * as actionTypes from "redux/actionTypes";

export const signUp = (email: string, password: string) => {
    return {
        type: actionTypes.SIGN_UP,
        payload: {email, password}
    };
};

export const signUpSuccess = (data: object) => {
    return {
        type: actionTypes.SIGN_UP_SUCCESS,
        payload: data
    };
};

export const signUpFailed = () => {
    return {
        type: actionTypes.SIGN_UP_FAILED
    };
};

export const signIn = (email: string, password: string) => {
    return {
        type: actionTypes.SIGN_IN_WITH_EMAIL_AND_PASSWORD,
        payload: {email, password}
    };
};

export const signInSuccess = (data: any) => {
    return {
        type: actionTypes.SIGN_IN_WITH_EMAIL_AND_PASSWORD_SUCCESS,
        payload: data
    };
};

export const signInFailed = () => {
    return {
        type: actionTypes.SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAILED
    };
};

export const signOut = () => {
    return {
        type: actionTypes.SIGN_OUT
    };
};
