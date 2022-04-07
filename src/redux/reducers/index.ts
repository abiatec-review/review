//@ts-ignore
import { combineReducers } from 'redux';
import contentfulReducer from "./ContentfulReducer";
import episodesReducer from "./EpisodesReducer";
import heroReducer from "./HeroesReducer";
import userReducer from "./UserReducer";
import appReducer from "./AppReducer";

export const rootReducer = combineReducers({
  heroReducer,
  episodesReducer,
  contentfulReducer,
  userReducer,
  appReducer
})

export type RootReducer = ReturnType<typeof rootReducer>