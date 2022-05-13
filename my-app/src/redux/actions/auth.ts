import {
    SIGN_IN_WITH_EMAIL_AND_PASSWORD, SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAILED,
    SIGN_IN_WITH_EMAIL_AND_PASSWORD_SUCCESS, SIGN_OUT,
    SIGN_UP,
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS
} from "redux/actionTypes";

export const signUp = (email: string, password: string) => {
    return {
        type: SIGN_UP,
        payload: {email, password}
    };
};

export const signUpSuccess = (data: object) => {
    return {
        type: SIGN_UP_SUCCESS,
        payload: data
    };
};

export const signUpFailed = () => {
    return {
        type: SIGN_UP_FAILED
    };
};

export const signIn = (email: string, password: string) => {
    return {
        type: SIGN_IN_WITH_EMAIL_AND_PASSWORD,
        payload: {email, password}
    };
};

export const signInSuccess = (data: any) => {
    return {
        type: SIGN_IN_WITH_EMAIL_AND_PASSWORD_SUCCESS,
        payload: data
    };
};

export const signInFailed = () => {
    return {
        type: SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAILED
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
