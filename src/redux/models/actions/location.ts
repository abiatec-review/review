import { Location } from "@models/entities";

import { FailedAction, SuccessAction } from "./action";
import { LoadingAction } from "./loading";

export const enum LocationActionType {
  GET_LOCATIONS_SUCCESS = "GET_LOCATIONS_SUCCESS",
  GET_LOCATIONS_FAILED = "GET_LOCATIONS_FAILED"
}

type GetEpisodesSuccessAction = SuccessAction<
  LocationActionType.GET_LOCATIONS_SUCCESS,
  Array<Location>
>;

type GetEpisodesFailedAction = FailedAction<LocationActionType.GET_LOCATIONS_FAILED>;

export type LocationAction = GetEpisodesSuccessAction | GetEpisodesFailedAction | LoadingAction;
