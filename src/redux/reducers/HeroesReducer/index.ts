
import { LOAD_HEROES_SUCCESS, LOAD_HEROES_FAILURE, LOAD_HEROES_LOADING } from "../../actions/heroActions"
import { IHeroesAction } from "../../actions/heroActions/types"
import { IHeroesState } from "./types"

const initialState: IHeroesState = {
  heroes: [],
  isError: false,
  isLoading: false
}

export default function heroReducer(state = initialState, action: IHeroesAction): IHeroesState {
  switch (action.type) {
    case LOAD_HEROES_SUCCESS: {
      return {
        ...state,
        isError: false,  
        isLoading: false,
        heroes: [
          ...action.payload
        ]
      }
    }
    case LOAD_HEROES_FAILURE: {
      return {
          ...state,
          isError: true,
          isLoading: false
      }
    }
    case LOAD_HEROES_LOADING: {
      return {
          ...state,
          isError: false,
          isLoading: true
      }
    }
    default: return state
  }
  
}