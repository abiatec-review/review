import { Episode } from "@models/entities";

export interface EpisodeReducer {
  isLoading: boolean;
  episodes: Array<Episode>;
}
