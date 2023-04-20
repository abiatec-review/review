import { Characters } from 'src/types/types';
import {
  AdditionalDataActionTypes,
  GetAdditionalActionType,
  SetCharactersFromLocationActionType,
  SetEpisodeCharactersActionType,
} from './action-types';

export const getAdditional = (payload: string): GetAdditionalActionType => {
  return {
    type: AdditionalDataActionTypes.GET_ADDITIONAL,
    payload,
  };
};

export const setEpisodeCharacters = (
  payload: Characters[],
): SetEpisodeCharactersActionType => {
  return {
    type: AdditionalDataActionTypes.SET_EPISODE_CHARACTERS,
    payload,
  };
};

export const setCharactersFromLocation = (
  payload: Characters[],
): SetCharactersFromLocationActionType => {
  return {
    type: AdditionalDataActionTypes.SET_CHARACTERS_FROM_LOCATION,
    payload,
  };
};
