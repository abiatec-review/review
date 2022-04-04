import {
  getLocationListFailedAction,
  getLocationListSuccessAction,
  startLoadingAction,
  stopLoadingAction
} from "@actions";
import { LocationAction } from "@models/actions";
import { Location, ResultList } from "@models/entities";
import { Dispatch } from "redux";

import requests, { fixDate } from "./base";

export function getLocations(page: number) {
  return async function (dispatch: Dispatch<LocationAction>) {
    try {
      dispatch(startLoadingAction());
      const { info, results } = await requests.get<ResultList<Location>>(`/location?page=${page}`);
      const locations = results.map(fixDate);
      dispatch(getLocationListSuccessAction(locations));
      return { nextPage: page + 1, hasMore: info.next !== null };
    } catch (error) {
      dispatch(getLocationListFailedAction(String(error)));
    } finally {
      dispatch(stopLoadingAction());
    }
  };
}
