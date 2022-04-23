import { Episode, PagedData } from "@redux/models/entities";

import { FailedAction, SuccessAction } from "./action";

export const enum EpisodeActionType {
  GET_EPISODE_LIST_SUCCESS = "GET_EPISODE_LIST_SUCCESS",
  GET_EPISODE_LIST_FAILED = "GET_EPISODE_LIST_FAILED"
}

type GetEpisodeListSuccessAction = SuccessAction<
  EpisodeActionType.GET_EPISODE_LIST_SUCCESS,
  PagedData<Episode>
>;

type GetEpisodeListFailedAction = FailedAction<EpisodeActionType.GET_EPISODE_LIST_FAILED>;

export type EpisodeAction = GetEpisodeListSuccessAction | GetEpisodeListFailedAction;
