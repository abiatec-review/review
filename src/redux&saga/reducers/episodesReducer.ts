import { EpisodesActionTypes } from 'redux&saga/types';

const initialState = {
  characters: { },
  receivedEpisodesInfo: [],
};

const {
  ADD_EPISODES_INFO, CLEAR_EPISODES_INFO, ADD_NEW_CHARACTERS,
} = EpisodesActionTypes;

export const episodesReducer = (
  state: typeof initialState = initialState,
  action: any,
) => {
  switch (action.type) {
    case ADD_EPISODES_INFO:
      return { ...state, receivedEpisodesInfo: state.receivedEpisodesInfo.concat(action.payload) };
    case CLEAR_EPISODES_INFO:
      return { ...state, receivedEpisodesInfo: [] };
    case ADD_NEW_CHARACTERS:
      return { ...state, characters: { ...state.characters, ...action.payload } };
    default:
      return state;
  }
};

export default episodesReducer;
