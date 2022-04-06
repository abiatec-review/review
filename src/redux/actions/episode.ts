import { EpisodeAction, EpisodeActionType } from "@redux/models/actions";
import { Episode } from "@redux/models/entities";

export function getEpisodeListSuccessAction(data: Array<Episode>): EpisodeAction {
  return {
    type: EpisodeActionType.GET_EPISODE_LIST_SUCCESS,
    payload: { data }
  };
}

export function getEpisodeListFailedAction(error: string): EpisodeAction {
  return {
    type: EpisodeActionType.GET_EPISODE_LIST_FAILED,
    payload: { error }
  };
}
