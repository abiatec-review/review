
import { LOAD_HEROES_SUCCESS, LOAD_HEROES_FAILURE, LOAD_HEROES_LOADING, SAVE_HERO_NAME, LOAD_MORE_HEROES_SUCCESS } from "../../actions/heroActions"
import { IHeroesAction } from "../../actions/heroActions/types"
import { IHeroesState } from "./types"

const initialState: IHeroesState = {
  heroName: '',
  nextPage: '1',
  heroes: [],
  isError: false,
  isLoading: false
}

export default function heroReducer(state = initialState, action: IHeroesAction): IHeroesState {
  switch (action.type) {
    case SAVE_HERO_NAME: {
      return {
        ...state,
        heroName: action.payload,
        nextPage: '1'
      }
    }
    case LOAD_HEROES_SUCCESS: {
      return {
        ...state,
        isError: false,  
        isLoading: false,
        nextPage: action.payload.info.next,
        heroes: [
          ...action.payload.results
        ]
      }
    }
    case LOAD_MORE_HEROES_SUCCESS: {
      return {
        ...state,
        isError: false,  
        isLoading: false,
        nextPage: action.payload.info.next,
        heroes: [
          ...state.heroes,
          ...action.payload.results
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