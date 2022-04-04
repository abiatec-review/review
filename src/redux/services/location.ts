import { getLocationListAction, startLoadingAction, stopLoadingAction } from "@actions";
import { LocationAction } from "@models/actions";
import { Location, Pagination, ResultList } from "@models/entities";
import { Dispatch } from "redux";

import requests, { fixDate } from "./base";

export function getLocations(page = 1) {
  return async function (dispatch: Dispatch<LocationAction>): Promise<Pagination> {
    dispatch(startLoadingAction());

    const { info, results } = await requests.get<ResultList<Location>>(`/location?page=${page}`);

    const locations = results.map(fixDate);
    dispatch(getLocationListAction(locations));

    dispatch(stopLoadingAction());

    return { nextPage: page + 1, hasMore: info.next !== null };
  };
}
