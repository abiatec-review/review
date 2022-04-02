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
