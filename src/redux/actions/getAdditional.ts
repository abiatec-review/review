import {actionsTypes} from './actionsType';

export const getAdditional = (payload: string) => {
  return {
    type: actionsTypes.GET_ADDITIONAL,
    payload,
  };
};

export const setEpisodeCharacters = (payload: any) => {
  return {
    type: actionsTypes.SET_EPISODE_CHARACTERS,
    payload,
  };
};

export const setCharactersFromLocation = (payload: any) => {
  return {
    type: actionsTypes.SET_CHARACTERS_FROM_LOCATION,
    payload,
  };
};
