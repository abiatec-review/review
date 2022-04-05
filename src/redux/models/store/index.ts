import { CharacterReducer, EpisodeReducer, LocationReducer, ScrollReducer } from "@models/reducers";

export default interface Store {
  character: CharacterReducer;
  location: LocationReducer;
  episode: EpisodeReducer;
  scroll: ScrollReducer;
}
