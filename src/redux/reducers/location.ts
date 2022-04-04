import { LoadingActionType, LocationAction, LocationActionType } from "@models/actions";
import { LocationReducer } from "@models/reducers";

const initialState: LocationReducer = {
  locations: [],
  isLoading: false
};

export function locationReducer(state = initialState, action: LocationAction): LocationReducer {
  const { type } = action;

  switch (type) {
    case LocationActionType.GET_LOCATIONS: {
      const { payload } = action;
      return {
        ...state,
        locations: [...state.locations, ...payload.locations]
      };
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
