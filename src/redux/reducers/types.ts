import { AnyAction } from "redux"
import { IContentItem } from "../../components/Atoms/ContentItem"
import { LOAD_HEROES_SUCCESS, LOAD_HEROES_FAILURE } from "../actions"

export interface IHeroesState {
  heroes: IContentItem[],
  isError: boolean
}

export type IHeroesAction = ILoadHeroes | ILoadFailHeroes 

interface ILoadHeroes {
  type: typeof LOAD_HEROES_SUCCESS,
  payload: IContentItem[]
}
interface ILoadFailHeroes {
  type: typeof LOAD_HEROES_FAILURE,
}