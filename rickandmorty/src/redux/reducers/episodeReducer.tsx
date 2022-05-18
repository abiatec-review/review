import {Episodes} from "../actions";

const initialState = {
  episodes: [],
  episodesLoader: false,
  episodeImages: []
}

export const episodesReducer = (state = initialState, action: { type: string; payload: string; }) => {
  switch(action.type) {
    case Episodes.GET_EPISODES:{
      return {
        ...state,
        episodesLoader: true
      }
    }
    case Episodes.SET_EPISODES: {
      return {
        ...state,
        episodesLoader: false,
        episodes: action.payload,
      }
    }
    case Episodes.GET_EPISODES_CHARACTER:{
      return {
        ...state,
        episodesLoader: true
      }
    }
    case Episodes.SET_EPISODES_CHARACTER: {
      return {
        ...state,
        episodesLoader: false,
        episodeImages: action.payload,
      }
    }
    case Episodes.DELETE_EPISODES_CHARACTER: {
      return {
        ...state,
        episodesLoader: false,
        episodeImages: []
      }
    }
    default:
      return state
  }
}
