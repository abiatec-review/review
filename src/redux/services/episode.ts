import { Dispatch } from "redux";

import {
  getEpisodeListFailedAction,
  getEpisodeListSuccessAction,
  startLoadingAction,
  stopLoadingAction
} from "@redux/actions";
import { EpisodeAction } from "@redux/models/actions";
import { Episode, ResultList } from "@redux/models/entities";

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
