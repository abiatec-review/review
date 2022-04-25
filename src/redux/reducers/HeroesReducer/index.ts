import {
  CLEAR_ALL_FILTERS,
  FILTER_HEROES_BY_SEX,
  FILTER_HEROES_BY_STATUS,
  LOAD_HEROES_FAILURE,
  LOAD_HEROES_LOADING,
  LOAD_HEROES_SUCCESS,
  LOAD_MORE_HEROES_SUCCESS,
  SAVE_HERO_NAME,
  SORT_HEROES_BY_LOCATION,
  SORT_HEROES_BY_NAME
} from "redux/actions/heroActions"
import {IHeroesAction} from "redux/actions/heroActions/types"
import {IHeroesState} from "./types"

const initialState: IHeroesState = {
  heroName: '',
  nextPage: '1',
  heroes: [],
  isError: false,
  isLoading: false,
  isSortedByLocation: false,
  isSortedByName: false,
  allFilters: {
    gender: '',
    status: ''
  },
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
    case SORT_HEROES_BY_LOCATION: {
      return {
        ...state,
        isSortedByLocation: action.payload
      }
    }
    case SORT_HEROES_BY_NAME: {
      return {
        ...state,
        isSortedByName: action.payload
      }
    }
    case FILTER_HEROES_BY_SEX: {
      return {
        ...state,
        allFilters: {...state.allFilters, gender: action.payload}
      }
    }
    case FILTER_HEROES_BY_STATUS: {
      return {
        ...state,
        allFilters: {...state.allFilters, status: action.payload}
      }
    }
    case CLEAR_ALL_FILTERS: {
      return {
        ...state,
        allFilters: {
          gender: '',
          status: ''
        }
      }
    }
    default: return state
  }
  
}