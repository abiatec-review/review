import { EpisodeAction, EpisodeActionType, LoadingActionType } from "@models/actions";
import { EpisodeReducer } from "@models/reducers";

const initialState: EpisodeReducer = {
  episodes: [],
  isLoading: false
};

export function episodeReducer(state = initialState, action: EpisodeAction): EpisodeReducer {
  const { type } = action;

  switch (type) {
    case EpisodeActionType.GET_EPISODES: {
      const { payload } = action;

      return {
        ...state,
        episodes: [...state.episodes, ...payload.episodes]
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
