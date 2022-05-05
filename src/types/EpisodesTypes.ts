import { Character } from './../models/CharacterReducer';
import { Episode } from '../models/EpisodeReducer';

export enum EpisodesActionTypes {
  FETCH_EPISODES = 'FETCH_EPISODES',
  FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS',
  FETCH_EPISODE_CHARACTERS = 'FETCH_EPISODE_CHARACTERS',
  FETCH_EPISODE_CHARACTERS_SUCCESS = 'FETCH_EPISODE_CHARACTERS_SUCCESS',
}

interface FetchEpisodesAction {
  type: EpisodesActionTypes.FETCH_EPISODES,
  payload: string[],
}

interface FetchEpisodesSuccessAction {
  type: EpisodesActionTypes.FETCH_EPISODES_SUCCESS,
  payload: Episode[],
}

interface FetchEpisodesCharactersAction {
  type: EpisodesActionTypes.FETCH_EPISODE_CHARACTERS,
  payload: string[],
}

interface FetchEpisodesCharactersActionSuccess {
  type: EpisodesActionTypes.FETCH_EPISODE_CHARACTERS_SUCCESS,
  payload: { [key: string]: Character[] },
}

export type EpisodesAction =
FetchEpisodesAction |
FetchEpisodesSuccessAction |
FetchEpisodesCharactersAction |
FetchEpisodesCharactersActionSuccess;