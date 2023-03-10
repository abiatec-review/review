import {actionsTypes} from './actionsType';

export const authSignUp = (payload: any) => {
  return {
    type: actionsTypes.AUTHENTIFICATION_SIGN_UP,
    payload,
  };
};

export const authSignIn = (payload: any) => {
  return {
    type: actionsTypes.AUTHENTIFICATION_SIGN_IN,
    payload,
  };
};

export const authSignInSuccess = (payload: any) => {
  return {
    type: actionsTypes.AUTHENTIFICATION_SIGN_IN_SUCCESS,
    payload,
  };
};

export const authSignUpSuccess = (payload: any) => {
  return {
    type: actionsTypes.AUTHENTIFICATION_SIGN_UP_SUCCESS,
    payload,
  };
};

export const authSignUpError = (payload: any) => {
  return {
    type: actionsTypes.AUTHENTIFICATION_SIGN_UP_ERROR,
    payload,
  };
};

export const identifyAuthUser = () => {
  return {
    type: actionsTypes.AUTHENTIFICATION_IDENTIFY,
  };
};

export const identifyAuthUserSuccess = (payload: any) => {
  return {
    type: actionsTypes.AUTHENTIFICATION_IDENTIFY_SUCCESS,
    payload,
  };
};

export const logOutUser = () => {
  return {
    type: actionsTypes.LOG_OUT_USER,
  };
};

export const userLoadAvatar = (payload: any) => {
  return {
    type: actionsTypes.USER_LOAD_AVATAR,
    payload,
  };
};

export const userLoadAvatarSuccess = (payload: any) => {
  return {
    type: actionsTypes.USER_LOAD_AVATAR_SUCCESS,
    payload,
  };
};
