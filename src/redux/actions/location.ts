import { LocationAction, LocationActionType } from "@models/actions";
import { Location } from "@models/entities";

export function getLocationListSuccessAction(data: Array<Location>): LocationAction {
  return {
    type: LocationActionType.GET_LOCATION_LIST_SUCCESS,
    payload: { data }
  };
}

export function getLocationListFailedAction(error: string): LocationAction {
  return {
    type: LocationActionType.GET_LOCATION_LIST_FAILED,
    payload: { error }
  };
}
