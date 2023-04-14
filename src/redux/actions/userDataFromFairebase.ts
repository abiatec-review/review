import { actionsTypes } from './actionsType';

export const getFaireBaseData = (payload: any) => {
  return {
    type: actionsTypes.GET_FAIRBASE_USER_DATA,
    payload,
  };
};

export const getFaireBaseDataSuccess = (payload: any) => {
  return {
    type: actionsTypes.GET_FAIRBASE_USER_DATA_SUCCESS,
    payload,
  };
};

export const getFaireBaseDataError = (payload: any) => {
  return {
    type: actionsTypes.GET_FAIRBASE_USER_DATA_ERROR,
    payload,
  };
};
// here we start put new data to faire base actions
export const putFaireBaseData = (payload: any) => {
  return {
    type: actionsTypes.PUT_FAIRBASE_USER_DATA,
    payload,
  };
};

export const putFaireBaseDataSuccess = (payload: any) => {
  return {
    type: actionsTypes.PUT_FAIRBASE_USER_DATA_SUCCESS,
    payload,
  };
};

export const putFaireBaseDataError = (payload: any) => {
  return {
    type: actionsTypes.PUT_FAIRBASE_USER_DATA_ERROR,
    payload,
  };
};
