import { Episode } from "@redux/models/entities";

export interface EpisodeReducer {
  error?: string;
  isLoading: boolean;
  episodes: Array<Episode>;
}
