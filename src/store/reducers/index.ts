import { combineReducers } from 'redux';
import charactersReducer from './characters';

const rootReducerOfStore = combineReducers({
  characters: charactersReducer,
});

export default rootReducerOfStore;

export type RootReducer = ReturnType<typeof rootReducerOfStore>;