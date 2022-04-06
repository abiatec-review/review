import { ScrollAction, ScrollActionType } from "@redux/models/actions";
import { ScrollReducer } from "@redux/models/reducers";

const initialState: ScrollReducer = {
  characterOffset: 0,
  locationOffset: 0,
  episodeOffset: 0
};

export function scrollReducer(state = initialState, action: ScrollAction): ScrollReducer {
  const { type, payload } = action;

  switch (type) {
    case ScrollActionType.SCROLL_CHARACTERS: {
      return { ...state, characterOffset: payload.data };
    }
    case ScrollActionType.SCROLL_LOCATIONS: {
      return { ...state, locationOffset: payload.data };
    }
    case ScrollActionType.SCROLL_EPISODES: {
      return { ...state, episodeOffset: payload.data };
    }
    default:
      return state;
  }
}
