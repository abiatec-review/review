import { Dispatch } from "redux";

import { getEpisodeListFailedAction, getEpisodeListSuccessAction } from "@redux/actions";
import { EpisodeAction } from "@redux/models/actions";
import { Episode, ResultList } from "@redux/models/entities";

import requests, { getPagedData } from "./base";

export function getEpisodes(page = 1) {
  return async function (dispatch: Dispatch<EpisodeAction>) {
    try {
      const result = await requests.get<ResultList<Episode>>(`/episode?page=${page}`);
      const data = getPagedData(page, result);
      dispatch(getEpisodeListSuccessAction(data));
    } catch (error) {
      dispatch(getEpisodeListFailedAction(String(error)));
    }
  };
}
