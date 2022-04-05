import { Episode } from "@models/entities";

import { FailedAction, SuccessAction } from "./action";
import { LoadingAction } from "./loading";

export const enum EpisodeActionType {
  GET_EPISODE_LIST_SUCCESS = "GET_EPISODE_LIST_SUCCESS",
  GET_EPISODE_LIST_FAILED = "GET_EPISODE_LIST_FAILED"
}

type GetEpisodeListSuccessAction = SuccessAction<
  EpisodeActionType.GET_EPISODE_LIST_SUCCESS,
  Array<Episode>
>;

type GetEpisodeListFailedAction = FailedAction<EpisodeActionType.GET_EPISODE_LIST_FAILED>;

export type EpisodeAction =
  | GetEpisodeListSuccessAction
  | GetEpisodeListFailedAction
  | LoadingAction;
