import { Episode, PagedData } from "@redux/models/entities";

export interface EpisodeReducer {
  error?: string;
  episodes: PagedData<Episode>;
}
