import { Location } from "@models/entities";

import { FailedAction, SuccessAction } from "./action";
import { LoadingAction } from "./loading";

export const enum LocationActionType {
  GET_LOCATION_LIST_SUCCESS = "GET_LOCATION_LIST_SUCCESS",
  GET_LOCATION_LIST_FAILED = "GET_LOCATION_LIST_FAILED"
}

type GetLocationListSuccessAction = SuccessAction<
  LocationActionType.GET_LOCATION_LIST_SUCCESS,
  Array<Location>
>;

type GetLocationListFailedAction = FailedAction<LocationActionType.GET_LOCATION_LIST_FAILED>;

export type LocationAction =
  | GetLocationListSuccessAction
  | GetLocationListFailedAction
  | LoadingAction;
