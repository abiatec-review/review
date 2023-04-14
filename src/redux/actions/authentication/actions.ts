import {
  AuthSignInParams,
  AuthSignInSuccessParams,
  AuthSignUpErrorParams,
  AuthSignUpParams,
  AuthSignUpSuccessParams,
  UserLoadAvatarParams,
} from 'src/types/types';
import {
  AuthenticationActionTypes,
  IdentifyUserActionType,
  IdentifyUserSuccessActionType,
  LoadAvatarActionTypes,
  LoadAvatarSuccessActionTypes,
  LogOutActionType,
  SignInActionType,
  SignInSuccessActionType,
  SignUpActionType,
  SignUpErrorActionType,
  SignUpSuccessActionType,
} from './action-types';

export const authSignUp = (payload: AuthSignUpParams): SignUpActionType => {
  return {
    type: AuthenticationActionTypes.AUTHENTICATION_SIGN_UP,
    payload,
  };
};

export const authSignUpSuccess = (
  payload: AuthSignUpSuccessParams,
): SignUpSuccessActionType => {
  return {
    type: AuthenticationActionTypes.AUTHENTICATION_SIGN_UP_SUCCESS,
    payload,
  };
};

export const authSignUpError = (
  payload: AuthSignUpErrorParams,
): SignUpErrorActionType => {
  return {
    type: AuthenticationActionTypes.AUTHENTICATION_SIGN_UP_ERROR,
    payload,
  };
};

export const authSignIn = (payload: AuthSignInParams): SignInActionType => {
  return {
    type: AuthenticationActionTypes.AUTHENTICATION_SIGN_IN,
    payload,
  };
};

export const authSignInSuccess = (
  payload: AuthSignInSuccessParams,
): SignInSuccessActionType => {
  return {
    type: AuthenticationActionTypes.AUTHENTICATION_SIGN_IN_SUCCESS,
    payload,
  };
};

export const identifyAuthUser = (): IdentifyUserActionType => {
  return {
    type: AuthenticationActionTypes.AUTHENTICATION_IDENTIFY,
  };
};

export const identifyAuthUserSuccess = (
  payload: AuthSignInSuccessParams,
): IdentifyUserSuccessActionType => {
  return {
    type: AuthenticationActionTypes.AUTHENTICATION_IDENTIFY_SUCCESS,
    payload,
  };
};

export const logOutUser = (): LogOutActionType => {
  return {
    type: AuthenticationActionTypes.LOG_OUT_USER,
  };
};

export const userLoadAvatar = (
  payload: UserLoadAvatarParams,
): LoadAvatarActionTypes => {
  return {
    type: AuthenticationActionTypes.USER_LOAD_AVATAR,
    payload,
  };
};

export const userLoadAvatarSuccess = (
  payload: UserLoadAvatarParams,
): LoadAvatarSuccessActionTypes => {
  return {
    type: AuthenticationActionTypes.USER_LOAD_AVATAR_SUCCESS,
    payload,
  };
};
