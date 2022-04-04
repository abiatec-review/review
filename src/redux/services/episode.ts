import { getEpisodeListAction, startLoadingAction, stopLoadingAction } from "@actions";
import { EpisodeAction } from "@models/actions";
import { Episode, Pagination, ResultList } from "@models/entities";
import { Dispatch } from "redux";

import requests, { fixDate } from "./base";

export function getEpisodes(page = 1) {
  return async function (dispatch: Dispatch<EpisodeAction>): Promise<Pagination> {
    dispatch(startLoadingAction());

    const { info, results } = await requests.get<ResultList<Episode>>(`/episode?page=${page}`);

    const episodes = results.map(fixDate);
    dispatch(getEpisodeListAction(episodes));

    dispatch(stopLoadingAction());

    return { nextPage: page + 1, hasMore: info.next !== null };
  };
}
