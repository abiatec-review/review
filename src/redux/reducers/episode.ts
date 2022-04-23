import { EpisodeAction, EpisodeActionType } from "@redux/models/actions";
import { EpisodeReducer } from "@redux/models/reducers";

const initialState: EpisodeReducer = {
  episodes: { nextPage: 1, hasMore: true, items: [] }
};

export function episodeReducer(state = initialState, action: EpisodeAction): EpisodeReducer {
  const { type } = action;

  switch (type) {
    case EpisodeActionType.GET_EPISODE_LIST_SUCCESS: {
      const { payload } = action;
      const pagedData = payload.data;
      return {
        ...state,
        error: undefined,
        episodes: { ...pagedData, items: [...state.episodes.items, ...pagedData.items] }
      };
    }
    case EpisodeActionType.GET_EPISODE_LIST_FAILED: {
      const { payload } = action;
      return { ...state, error: payload.error };
    }
    default:
      return state;
  }
}
