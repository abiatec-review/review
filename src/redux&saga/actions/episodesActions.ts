import { TabNameType } from 'Molecules/types';
import { EpisodesActionTypes, IEpisode } from 'redux&saga/types';

const {
  ADD_EPISODES_INFO, GET_EPISODES_INFO, ADD_NEW_CHARACTERS, CLEAR_EPISODES_INFO, GET_CHARS_INFO,
} = EpisodesActionTypes;

export const addEpisodesInfo = (payload: IEpisode[]) => ({
  type: ADD_EPISODES_INFO,
  payload,
});

export const getEpisodesInfo = (payload: TabNameType[]) => ({
  type: GET_EPISODES_INFO,
  payload,
});

export const addNewChars = (payload: Object) => ({
  type: ADD_NEW_CHARACTERS,
  payload,
});

export const clearEpisodesInfoList = () => ({
  type: CLEAR_EPISODES_INFO,
});

export const getChars = (payload: string[]) => ({
  type: GET_CHARS_INFO,
  payload,
});
