import { Location, PagedData } from "@redux/models/entities";

import { FailedAction, SuccessAction } from "./action";

export const enum LocationActionType {
  GET_LOCATION_LIST_SUCCESS = "GET_LOCATION_LIST_SUCCESS",
  GET_LOCATION_LIST_FAILED = "GET_LOCATION_LIST_FAILED"
}

type GetLocationListSuccessAction = SuccessAction<
  LocationActionType.GET_LOCATION_LIST_SUCCESS,
  PagedData<Location>
>;

type GetLocationListFailedAction = FailedAction<LocationActionType.GET_LOCATION_LIST_FAILED>;

export type LocationAction = GetLocationListSuccessAction | GetLocationListFailedAction;
