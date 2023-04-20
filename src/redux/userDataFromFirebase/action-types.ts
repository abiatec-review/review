import {
  ErrorParams,
  GetFaireBaseDataSuccess,
  PutFaireBaseData,
} from 'src/types/types';

export const enum UserDataFromFirebaseActionTypes {
  GET_FIREBASE_USER_DATA = 'GET_FIREBASE_USER_DATA',
  GET_FIREBASE_USER_DATA_SUCCESS = 'GET_FIREBASE_USER_DATA_SUCCESS',
  GET_FIREBASE_USER_DATA_ERROR = 'GET_FIREBASE_USER_DATA_ERROR',
  PUT_FIREBASE_USER_DATA = 'PUT_FIREBASE_USER_DATA',
  PUT_FIREBASE_USER_DATA_SUCCESS = 'PUT_FIREBASE_USER_DATA_SUCCESS',
  PUT_FIREBASE_USER_DATA_ERROR = 'PUT_FIREBASE_USER_DATA_ERROR',
}

export type GetFaireBaseDataActionType = {
  type: UserDataFromFirebaseActionTypes.GET_FIREBASE_USER_DATA;
};

export type GetFaireBaseDataSuccessActionType = {
  type: UserDataFromFirebaseActionTypes.GET_FIREBASE_USER_DATA_SUCCESS;
  payload: GetFaireBaseDataSuccess;
};

export type GetFaireBaseDataErrorActionType = {
  type: UserDataFromFirebaseActionTypes.GET_FIREBASE_USER_DATA_ERROR;
  payload: ErrorParams;
};

export type PutFaireBaseDataActionType = {
  type: UserDataFromFirebaseActionTypes.PUT_FIREBASE_USER_DATA;
  payload: PutFaireBaseData;
};

export type PutFaireBaseDataSuccessActionType = {
  type: UserDataFromFirebaseActionTypes.PUT_FIREBASE_USER_DATA_SUCCESS;
  payload: PutFaireBaseData;
};

export type PutFaireBaseDataErrorActionType = {
  type: UserDataFromFirebaseActionTypes.PUT_FIREBASE_USER_DATA_ERROR;
  payload: ErrorParams;
};

export type UserDataFireBaseAction =
  | GetFaireBaseDataActionType
  | GetFaireBaseDataSuccessActionType
  | GetFaireBaseDataErrorActionType
  | PutFaireBaseDataActionType
  | PutFaireBaseDataSuccessActionType
  | PutFaireBaseDataErrorActionType;
