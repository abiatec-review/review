import { IContentItem } from "redux/reducers/HeroesReducer/types"
import {
  LOAD_HEROES_SUCCESS,
  LOAD_HEROES_FAILURE,
  LOAD_HEROES_LOADING,
  SAVE_HERO_NAME,
  LOAD_MORE_HEROES_SUCCESS,
  SORT_HEROES_BY_LOCATION, SORT_HEROES_BY_NAME, FILTER_HEROES_BY_STATUS, FILTER_HEROES_BY_SEX, CLEAR_ALL_FILTERS
} from "./index"

export type IHeroesAction =
    ILoadHeroes | ILoadFailHeroes | ILoadingHeroes | ISaveHeroName |
    ILoadMoreHeroesSuccess | ISortHeroesByLocation | ISortHeroesByName |
    ISFilterHeroesBySex | ISFilterHeroesByStatus | IClearAllFilters;

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

interface ISortHeroesByLocation {
  type: typeof SORT_HEROES_BY_LOCATION,
  payload: boolean
}

interface ISortHeroesByName {
  type: typeof SORT_HEROES_BY_NAME,
  payload: boolean
}

interface ISFilterHeroesBySex {
  type: typeof FILTER_HEROES_BY_SEX,
  payload: string
}

interface ISFilterHeroesByStatus {
  type: typeof FILTER_HEROES_BY_STATUS,
  payload: string
}
interface IClearAllFilters {
  type: typeof CLEAR_ALL_FILTERS,
}