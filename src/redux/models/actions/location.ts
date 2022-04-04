import { Location } from "@models/entities";

import { LoadingAction } from "./loading";

export const enum LocationActionType {
  GET_LOCATIONS = "GET_LOCATIONS"
}

interface GetLocationsAction {
  type: LocationActionType.GET_LOCATIONS;
  payload: { locations: Array<Location> };
}

export type LocationAction = GetLocationsAction | LoadingAction;
