import { LocationAction, LocationActionType } from "@redux/models/actions";
import { LocationReducer } from "@redux/models/reducers";

const initialState: LocationReducer = {
  locations: { nextPage: 1, hasMore: true, items: [] }
};

export function locationReducer(state = initialState, action: LocationAction): LocationReducer {
  const { type } = action;

  switch (type) {
    case LocationActionType.GET_LOCATION_LIST_SUCCESS: {
      const { payload } = action;
      const pagedData = payload.data;
      return {
        ...state,
        error: undefined,
        locations: { ...pagedData, items: [...state.locations.items, ...pagedData.items] }
      };
    }
    case LocationActionType.GET_LOCATION_LIST_FAILED: {
      const { payload } = action;
      return { ...state, error: payload.error };
    }
    default:
      return state;
  }
}
