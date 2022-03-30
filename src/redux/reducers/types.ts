import { AnyAction } from "redux"
import { IContentItem } from "../../components/Atoms/ContentItem"
import { LOAD_HEROES_SUCCESS, LOAD_HEROES_FAILURE, LOAD_HEROES_LOADING } from "../actions"

export interface IHeroesState {
  heroes: IContentItem[],
  isError: boolean,
  isLoading: boolean,
}

export type IHeroesAction = ILoadHeroes | ILoadFailHeroes | ILoadingHeroes

interface ILoadHeroes {
  type: typeof LOAD_HEROES_SUCCESS,
  payload: IContentItem[]
}
interface ILoadFailHeroes {
  type: typeof LOAD_HEROES_FAILURE,
}

interface ILoadingHeroes {
  type: typeof LOAD_HEROES_LOADING,
}