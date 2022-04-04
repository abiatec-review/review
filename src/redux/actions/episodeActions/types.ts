import { IEpisodeState, IHeroFromEpisode } from 'redux/reducers/EpisodesReducer/types';
import { LOAD_EPISODE_SUCCESS, LOAD_HEROES_FROM_EPISODE, LOAD_EPISODE_LOADING } from './index';

export type IEpisodeAction = ILoadEpisode | ILoadHeroes | ILoadingEpisode;

interface ILoadEpisode {
  type: typeof LOAD_EPISODE_SUCCESS,
  payload: IEpisodeState
}
interface ILoadHeroes {
  type: typeof LOAD_HEROES_FROM_EPISODE,
  payload: IHeroFromEpisode[]
}

interface ILoadingEpisode {
  type: typeof LOAD_EPISODE_LOADING,
}