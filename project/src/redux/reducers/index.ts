import { combineReducers } from 'redux';

import { cardReducer } from './cardsReducer';
import { characterReducer } from './characterReducer';
import { episodesReducer } from './episodesReducer';

export const rootReducer = combineReducers({
  cards: cardReducer,
  episodes: episodesReducer,
  character: characterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
