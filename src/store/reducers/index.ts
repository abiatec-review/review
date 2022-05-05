import { combineReducers } from 'redux';
import charactersReducer from './characters';
import episodesReducer from './episodes';

const rootReducerOfStore = combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
});

export default rootReducerOfStore;

export type RootReducer = ReturnType<typeof rootReducerOfStore>;