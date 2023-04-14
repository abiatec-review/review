import { Characters } from 'src/types/types';

export const enum AdditionalDataActionTypes {
  GET_ADDITIONAL = 'GET_ADDITIONAL',
  SET_EPISODE_CHARACTERS = 'SET_EPISODE_CHARACTERS',
  SET_CHARACTERS_FROM_LOCATION = 'SET_CHARACTERS_FROM_LOCATION',
}

export type GetAdditionalActionType = {
  type: AdditionalDataActionTypes.GET_ADDITIONAL;
  payload: string;
};

export type SetEpisodeCharactersActionType = {
  type: AdditionalDataActionTypes.SET_EPISODE_CHARACTERS;
  payload: Characters[];
};

export type SetCharactersFromLocationActionType = {
  type: AdditionalDataActionTypes.SET_CHARACTERS_FROM_LOCATION;
  payload: Characters[];
};

export type AdditionalActions =
  | GetAdditionalActionType
  | SetEpisodeCharactersActionType
  | SetCharactersFromLocationActionType;
