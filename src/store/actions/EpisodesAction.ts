import { Character } from './../../models/CharacterReducer';
import { Episode } from './../../models/EpisodeReducer';
import { EpisodesActionTypes } from './../../types/EpisodesTypes';

const { FETCH_EPISODES, FETCH_EPISODES_SUCCESS, FETCH_EPISODE_CHARACTERS, FETCH_EPISODE_CHARACTERS_SUCCESS } = EpisodesActionTypes;

export const FetchEpisodes = (payload: string[]) => ({
  type: FETCH_EPISODES,
  payload,
});

export const FetchEpisodesSuccess = (payload: Episode[]) => ({
  type: FETCH_EPISODES_SUCCESS,
  payload,
});

export const FetchEpisodesCharacters = (payload: { characters: string[], episodeName: string }) => ({
  type: FETCH_EPISODE_CHARACTERS,
  payload,
});

export const FetchEpisodesCharactersSuccess = (payload: { [key: string]: Character }) => ({
  type: FETCH_EPISODE_CHARACTERS_SUCCESS,
  payload,
});