import { LOAD_USER_LOADING } from 'redux/actions/UserActions';
import { LOAD_ANY_ERROR } from 'redux/actions/UserActions';
import { LOAD_USER_SUCCESS } from 'redux/actions/UserActions';
import { SIGN_UP_REQUEST, SIGN_IN_REQUEST } from ".";

interface IPayload {
  loginField: string;
  passwordField: string;
}

export interface ISignUpAC {
  type: typeof SIGN_UP_REQUEST,
  payload: IPayload
}

export interface ISignInAC {
  type: typeof SIGN_IN_REQUEST,
  payload: IPayload
}


interface ILoadUserSuccess {
  type: typeof LOAD_USER_SUCCESS,
  payload: string
}

interface ILoadAnyError {
  type: typeof LOAD_ANY_ERROR,
  payload: string
}

interface ILoadUserLoading {
  type: typeof LOAD_USER_LOADING,
}

export type IUserActions = ILoadUserSuccess | ILoadAnyError | ILoadUserLoading;

export type UserSignCallback = ISignUpAC | ISignInAC;