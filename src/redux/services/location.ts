import { Dispatch } from "redux";

import { getLocationListFailedAction, getLocationListSuccessAction } from "@redux/actions";
import { LocationAction } from "@redux/models/actions";
import { Location, ResultList } from "@redux/models/entities";

import requests, { getPagedData } from "./base";

export function getLocations(page = 1) {
  return async function (dispatch: Dispatch<LocationAction>) {
    try {
      const result = await requests.get<ResultList<Location>>(`/location?page=${page}`);
      const data = getPagedData(page, result);
      dispatch(getLocationListSuccessAction(data));
    } catch (error) {
      dispatch(getLocationListFailedAction(String(error)));
    }
  };
}
