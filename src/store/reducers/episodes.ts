import { EpisodesState } from '../../models/EpisodeReducer';
import { EpisodesAction, EpisodesActionTypes } from './../../types/EpisodesTypes';

const { FETCH_EPISODES_SUCCESS, FETCH_EPISODE_CHARACTERS_SUCCESS } = EpisodesActionTypes;

const initialState = {
  episodes: null,
  charactersInEpisode: {},
};

const episodesReducer = (state: EpisodesState = initialState, action: EpisodesAction): EpisodesState => {
  switch (action.type) {
    case FETCH_EPISODES_SUCCESS:
      return { ...state, episodes: action.payload };
    case FETCH_EPISODE_CHARACTERS_SUCCESS:
      return { ...state, charactersInEpisode: { ...state.charactersInEpisode, ...action.payload } };
    default: return state;
  }
};

export default episodesReducer;