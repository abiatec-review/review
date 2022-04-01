
import { LOAD_EPISODE_SUCCESS, LOAD_HEROES_FROM_EPISODE } from "../../actions/episodeActions"
import { IHeroesState } from "./types"

const initialState: any = {
  heroes: [],
  name: '',
  episode: '',
  air_date: '',
  isError: false,
  isLoading: false
}

export default function episodesReducer(state = initialState, action: any): IHeroesState {
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
    default: return state
  }
  
}