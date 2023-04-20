import {
  ErrorParams,
  GetFaireBaseDataSuccess,
  PutFaireBaseData,
} from 'src/types/types';
import {
  GetFaireBaseDataActionType,
  GetFaireBaseDataErrorActionType,
  GetFaireBaseDataSuccessActionType,
  PutFaireBaseDataActionType,
  PutFaireBaseDataErrorActionType,
  PutFaireBaseDataSuccessActionType,
  UserDataFromFirebaseActionTypes,
} from './action-types';

export const getFaireBaseData = (): GetFaireBaseDataActionType => {
  return {
    type: UserDataFromFirebaseActionTypes.GET_FIREBASE_USER_DATA,
  };
};

export const getFaireBaseDataSuccess = (
  payload: GetFaireBaseDataSuccess,
): GetFaireBaseDataSuccessActionType => {
  return {
    type: UserDataFromFirebaseActionTypes.GET_FIREBASE_USER_DATA_SUCCESS,
    payload,
  };
};

export const getFaireBaseDataError = (
  payload: ErrorParams,
): GetFaireBaseDataErrorActionType => {
  return {
    type: UserDataFromFirebaseActionTypes.GET_FIREBASE_USER_DATA_ERROR,
    payload,
  };
};

export const putFaireBaseData = (
  payload: PutFaireBaseData,
): PutFaireBaseDataActionType => {
  console.log(222, payload);
  return {
    type: UserDataFromFirebaseActionTypes.PUT_FIREBASE_USER_DATA,
    payload,
  };
};

export const putFaireBaseDataSuccess = (
  payload: PutFaireBaseData,
): PutFaireBaseDataSuccessActionType => {
  return {
    type: UserDataFromFirebaseActionTypes.PUT_FIREBASE_USER_DATA_SUCCESS,
    payload,
  };
};

export const putFaireBaseDataError = (
  payload: ErrorParams,
): PutFaireBaseDataErrorActionType => {
  return {
    type: UserDataFromFirebaseActionTypes.PUT_FIREBASE_USER_DATA_ERROR,
    payload,
  };
};
