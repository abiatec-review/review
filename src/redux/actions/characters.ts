import {actionsTypes} from './actionsType';

export const getCharaters = (payload: any) => {
  return {
    type: actionsTypes.GET_CHARACTERS,
    payload,
  };
};

export const getCharatersSucsess = () => {
  return {
    type: actionsTypes.GET_CHARACTERS_SUCSESS,
  };
};

export const getNextCharaters = (payload: any) => {
  return {
    type: actionsTypes.GET_NEXT_CHARACTERS,
    payload,
  };
};

export const getNextCharatersSucsess = (payload: any) => {
  return {
    type: actionsTypes.GET_NEXT_CHARACTERS_SUCSESS,
    payload,
  };
};

export const changeThemeMode = (payload: any) => {
  return {
    type: actionsTypes.CHANGE_THEME,
    payload,
  };
};
