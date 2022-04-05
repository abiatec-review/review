import { EpisodeAction, EpisodeActionType, LoadingActionType } from "@models/actions";
import { EpisodeReducer } from "@models/reducers";

const initialState: EpisodeReducer = {
  episodes: [],
  isLoading: false
};

export function episodeReducer(state = initialState, action: EpisodeAction): EpisodeReducer {
  const { type } = action;

  switch (type) {
    case EpisodeActionType.GET_EPISODE_LIST_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        error: undefined,
        episodes: [...state.episodes, ...payload.data]
      };
    }
    case EpisodeActionType.GET_EPISODE_LIST_FAILED: {
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
