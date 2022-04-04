import { IContentItem } from "redux/reducers/HeroesReducer/types"
import { LOAD_HEROES_SUCCESS, LOAD_HEROES_FAILURE, LOAD_HEROES_LOADING, SAVE_HERO_NAME, LOAD_MORE_HEROES_SUCCESS } from "./index"

export type IHeroesAction = ILoadHeroes | ILoadFailHeroes | ILoadingHeroes | ISaveHeroName | ILoadMoreHeroesSuccess

interface ILoadHeroesPayload {
  info: {
    next: string
  },
  results: IContentItem[]
}

interface ILoadHeroes {
  type: typeof LOAD_HEROES_SUCCESS,
  payload: ILoadHeroesPayload
}
interface ILoadMoreHeroesSuccess {
  type: typeof LOAD_MORE_HEROES_SUCCESS,
  payload: ILoadHeroesPayload
}
interface ILoadFailHeroes {
  type: typeof LOAD_HEROES_FAILURE,
}

interface ILoadingHeroes {
  type: typeof LOAD_HEROES_LOADING,
}

interface ISaveHeroName {
  type: typeof SAVE_HERO_NAME,
  payload: string
}