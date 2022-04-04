import { ScrollAction, ScrollActionType } from "@models/actions";
import { ScrollReducer } from "@models/reducers";

const initialState: ScrollReducer = {
  characterOffset: 0,
  locationOffset: 0,
  episodeOffset: 0
};

export function scrollReducer(state = initialState, action: ScrollAction): ScrollReducer {
  const { type, payload } = action;
  const { data } = payload;

  switch (type) {
    case ScrollActionType.SCROLL_CHARACTERS: {
      return { ...state, characterOffset: data };
    }
    case ScrollActionType.SCROLL_LOCATIONS: {
      return { ...state, locationOffset: data };
    }
    case ScrollActionType.SCROLL_EPISODES: {
      return { ...state, episodeOffset: data };
    }
    default:
      return state;
  }
}
