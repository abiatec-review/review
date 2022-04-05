import {
  getEpisodeListFailedAction,
  getEpisodeListSuccessAction,
  startLoadingAction,
  stopLoadingAction
} from "@actions";
import { EpisodeAction } from "@models/actions";
import { Episode, ResultList } from "@models/entities";
import { Dispatch } from "redux";

import requests, { fixDate } from "./base";

export function getEpisodes(page: number) {
  return async function (dispatch: Dispatch<EpisodeAction>) {
    try {
      dispatch(startLoadingAction());
      const { info, results } = await requests.get<ResultList<Episode>>(`/episode?page=${page}`);
      const episodes = results.map(fixDate);
      dispatch(getEpisodeListSuccessAction(episodes));
      return { nextPage: page + 1, hasMore: info.next !== null };
    } catch (error) {
      dispatch(getEpisodeListFailedAction(String(error)));
    } finally {
      dispatch(stopLoadingAction());
    }
  };
}
