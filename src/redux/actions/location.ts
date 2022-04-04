import { LocationActionType } from "@models/actions";
import { Location } from "@models/entities";

export function getLocationListAction(locations: Array<Location>) {
  return {
    type: LocationActionType.GET_LOCATIONS,
    payload: { locations }
  };
}
