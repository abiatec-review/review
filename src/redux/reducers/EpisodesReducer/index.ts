
import { LOAD_EPISODE_LOADING, LOAD_EPISODE_SUCCESS, LOAD_HEROES_FROM_EPISODE } from "redux/actions/episodeActions"
import { IEpisodeAction } from "redux/actions/episodeActions/types"
import { IEpisodeState } from "./types"

const initialState: IEpisodeState = {
  heroes: [],
  name: '',
  episode: '',
  air_date: '',
  isError: false,
  isLoading: false
}

export default function episodesReducer(state = initialState, action: IEpisodeAction): IEpisodeState {
  switch (action.type) {
    case LOAD_EPISODE_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isError: false,  
        isLoading: false,
      }
    }
    case LOAD_HEROES_FROM_EPISODE: {
      return {
        ...state,
        heroes: [
          ...action.payload,
        ],
        isError: false,  
        isLoading: false,
      }
    }
    case LOAD_EPISODE_LOADING: {
      return {
        ...state, 
        isLoading: true,
      }
    }
    default: return state
  }
  
}