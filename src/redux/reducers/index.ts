
import { LOAD_HEROES_SUCCESS, LOAD_HEROES_FAILURE } from "../actions"
import { IHeroesAction, IHeroesState } from "./types"


const initialState: IHeroesState = {
  heroes: [],
  isError: false
}
export default function reducer(state = initialState, action: IHeroesAction): IHeroesState {
  switch (action.type) {
    case LOAD_HEROES_SUCCESS: {
      return {
        ...state,
        isError: false,  
        heroes: [
          ...action.payload
        ]
      }
    }
    case LOAD_HEROES_FAILURE: {
      return {
          ...state,
          isError: true
      }
    }
    default: return state
  }
  
}