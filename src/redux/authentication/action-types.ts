import {
  AuthSignInParams,
  AuthSignInSuccessParams,
  AuthSignUpErrorParams,
  AuthSignUpParams,
  AuthSignUpSuccessParams,
  UserLoadAvatarParams,
} from 'src/types/types';

export const enum AuthenticationActionTypes {
  AUTHENTICATION_SIGN_UP = 'AUTHENTICATION_SIGN_UP',
  AUTHENTICATION_SIGN_UP_SUCCESS = 'AUTHENTICATION_SIGN_UP_SUCCESS',
  AUTHENTICATION_SIGN_UP_ERROR = 'AUTHENTICATION_SIGN_UP_ERROR',
  AUTHENTICATION_IDENTIFY = 'AUTHENTICATION_IDENTIFY',
  AUTHENTICATION_IDENTIFY_SUCCESS = 'AUTHENTICATION_IDENTIFY_SUCCESS',
  AUTHENTICATION_SIGN_IN = 'AUTHENTICATION_SIGN_IN',
  AUTHENTICATION_SIGN_IN_SUCCESS = 'AUTHENTICATION_SIGN_IN_SUCCESS',
  USER_LOAD_AVATAR = 'USER_LOAD_AVATAR',
  USER_LOAD_AVATAR_SUCCESS = 'USER_LOAD_AVATAR_SUCCESS',
  LOG_OUT_USER = 'LOG_OUT_USER',
}

export type SignUpActionType = {
  type: AuthenticationActionTypes.AUTHENTICATION_SIGN_UP;
  payload: AuthSignUpParams;
};

export type SignUpSuccessActionType = {
  type: AuthenticationActionTypes.AUTHENTICATION_SIGN_UP_SUCCESS;
  payload: AuthSignUpSuccessParams;
};

export type SignUpErrorActionType = {
  type: AuthenticationActionTypes.AUTHENTICATION_SIGN_UP_ERROR;
  payload: AuthSignUpErrorParams;
};

export type SignInActionType = {
  type: AuthenticationActionTypes.AUTHENTICATION_SIGN_IN;
  payload: AuthSignInParams;
};

export type SignInSuccessActionType = {
  type: AuthenticationActionTypes.AUTHENTICATION_SIGN_IN_SUCCESS;
  payload: AuthSignInSuccessParams;
};

export type IdentifyUserActionType = {
  type: AuthenticationActionTypes.AUTHENTICATION_IDENTIFY;
};

export type IdentifyUserSuccessActionType = {
  type: AuthenticationActionTypes.AUTHENTICATION_IDENTIFY_SUCCESS;
  payload: AuthSignInSuccessParams;
};

export type LogOutActionType = {
  type: AuthenticationActionTypes.LOG_OUT_USER;
};

export type LoadAvatarActionTypes = {
  type: AuthenticationActionTypes.USER_LOAD_AVATAR;
  payload: UserLoadAvatarParams;
};

export type LoadAvatarSuccessActionTypes = {
  type: AuthenticationActionTypes.USER_LOAD_AVATAR_SUCCESS;
  payload: UserLoadAvatarParams;
};

export type AuthAction =
  | SignUpActionType
  | SignUpSuccessActionType
  | SignUpErrorActionType
  | SignInActionType
  | SignInSuccessActionType
  | IdentifyUserActionType
  | IdentifyUserSuccessActionType
  | LoadAvatarActionTypes
  | LoadAvatarSuccessActionTypes
  | LogOutActionType;
