import { CharacterReducer, EpisodeReducer, LocationReducer, ScrollReducer } from "@models/reducers";

export default interface Store {
  characterReducer: CharacterReducer;
  locationReducer: LocationReducer;
  episodeReducer: EpisodeReducer;
  scrollReducer: ScrollReducer;
}
