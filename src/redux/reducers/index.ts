//@ts-ignore
import { combineReducers } from 'redux';
import contentfulReducer from "./ContentfulReducer";
import episodesReducer from "./EpisodesReducer";
import heroReducer from "./HeroesReducer";

export const rootReducer = combineReducers({
  heroReducer,
  episodesReducer,
  contentfulReducer
})

export type RootReducer = ReturnType<typeof rootReducer>