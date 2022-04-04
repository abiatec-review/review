import { Episode } from "@models/entities";

import { LoadingAction } from "./loading";

export const enum EpisodeActionType {
  GET_EPISODES = "GET_EPISODES"
}

interface GetEpisodesAction {
  type: EpisodeActionType.GET_EPISODES;
  payload: { episodes: Array<Episode> };
}

export type EpisodeAction = GetEpisodesAction | LoadingAction;
