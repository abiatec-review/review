//@ts-ignore
import { combineReducers } from 'redux';
import contentfulReducer from "./ContentfulReducer";
import episodesReducer from "./EpisodesReducer";
import heroReducer from "./HeroesReducer";
import userReducer from "./UserReducer";

export const rootReducer = combineReducers({
  heroReducer,
  episodesReducer,
  contentfulReducer,
  userReducer,
})

export type RootReducer = ReturnType<typeof rootReducer>