import { IEpisode } from '../../models/responseTypes';

export interface EpisodeState {
  episodes: IEpisode[],
  loading: boolean,
  error: null | string,
}

export enum EpisodesActionTypes {
  FETCH_EPISODES = 'FETCH_EPISODES',
  FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS',
  FETCH_EPISODES_ERROR = 'FETCH_EPISODES_ERROR',
}

interface FetchEpisodesAction {
  type: EpisodesActionTypes.FETCH_EPISODES,
  payload: string[],
}

interface FetchEpisodesSuccessAction {
  type: EpisodesActionTypes.FETCH_EPISODES_SUCCESS,
  payload: IEpisode[],
}

interface FetchEpisodesErrorAction {
  type: EpisodesActionTypes.FETCH_EPISODES_ERROR,
  payload: string,
}

export type EpisodesAction = FetchEpisodesAction | FetchEpisodesSuccessAction | FetchEpisodesErrorAction;

export const fetchEpisodesAction = (episode: string[]) => ({
  type: EpisodesActionTypes.FETCH_EPISODES,
  payload: episode,
});
