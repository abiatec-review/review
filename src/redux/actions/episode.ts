import { EpisodeAction, EpisodeActionType } from "@models/actions";
import { Episode } from "@models/entities";

export function getEpisodeListAction(episodes: Array<Episode>): EpisodeAction {
  return {
    type: EpisodeActionType.GET_EPISODES,
    payload: { episodes }
  };
}
