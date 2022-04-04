import { Episode } from "@models/entities";

import { FailedAction, SuccessAction } from "./action";
import { LoadingAction } from "./loading";

export const enum EpisodeActionType {
  GET_EPISODES_SUCCESS = "GET_EPISODES_SUCCESS",
  GET_EPISODES_FAILED = "GET_EPISODES_FAILED"
}

type GetEpisodesSuccessAction = SuccessAction<
  EpisodeActionType.GET_EPISODES_SUCCESS,
  Array<Episode>
>;

type GetEpisodesFailedAction = FailedAction<EpisodeActionType.GET_EPISODES_FAILED>;

export type EpisodeAction = GetEpisodesSuccessAction | GetEpisodesFailedAction | LoadingAction;
