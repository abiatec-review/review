import { combineReducers } from "redux";
import contentfulReducer from "./ContentfulReducer";
import episodesReducer from "./EpisodesReducer";
import heroReducer from "./HeroesReducer";

export const rootReducer = combineReducers({
  heroes: heroReducer,
  episode: episodesReducer,
  contentful: contentfulReducer
})

export type RootReducer = ReturnType<typeof rootReducer>