import { EpisodeAction, EpisodeActionType } from "@models/actions";
import { Episode } from "@models/entities";

export function getEpisodeListSuccessAction(data: Array<Episode>): EpisodeAction {
  return {
    type: EpisodeActionType.GET_EPISODES_SUCCESS,
    payload: { data }
  };
}

export function getEpisodeListFailedAction(error: string): EpisodeAction {
  return {
    type: EpisodeActionType.GET_EPISODES_FAILED,
    payload: { error }
  };
}
