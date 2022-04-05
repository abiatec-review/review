import { LoadingActionType, LocationAction, LocationActionType } from "@models/actions";
import { LocationReducer } from "@models/reducers";

const initialState: LocationReducer = {
  locations: [],
  isLoading: false
};

export function locationReducer(state = initialState, action: LocationAction): LocationReducer {
  const { type } = action;

  switch (type) {
    case LocationActionType.GET_LOCATION_LIST_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        error: undefined,
        locations: [...state.locations, ...payload.data]
      };
    }
    case LocationActionType.GET_LOCATION_LIST_FAILED: {
      const { payload } = action;
      return { ...state, error: payload.error };
    }
    case LoadingActionType.START: {
      return { ...state, isLoading: true };
    }
    case LoadingActionType.STOP: {
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
}
