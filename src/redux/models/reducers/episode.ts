import { Episode } from "@models/entities";

export interface EpisodeReducer {
  error?: string;
  isLoading: boolean;
  episodes: Array<Episode>;
}
