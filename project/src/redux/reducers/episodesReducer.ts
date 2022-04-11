import { EpisodeState, EpisodesAction, EpisodesActionTypes } from "../actions/episodes";

const initialState: EpisodeState = {
    episodes: [],
    loading: false,
    error: null,
}

export const episodesReducer = (state = initialState, action: EpisodesAction): EpisodeState => {
    switch(action.type) {
        case EpisodesActionTypes.FETCH_EPISODES: {
            return {
                ...state,
                loading: true,
            };
        }
        case EpisodesActionTypes.FETCH_EPISODES_SUCCESS: {
            return {
                ...state,
                loading: false,
                episodes: action.payload,
                error: null,
            };
        }
        case EpisodesActionTypes.FETCH_EPISODES_ERROR: {
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        }
        default: {
            return state;
        }
    }
}