export const LOAD_HEROES = 'LOAD_HEROES'
export const LOAD_MORE_HEROES = 'LOAD_MORE_HEROES'
export const LOAD_MORE_HEROES_SUCCESS = 'LOAD_MORE_HEROES_SUCCESS'
export const LOAD_HEROES_SUCCESS = 'LOAD_HEROES_SUCCESS'
export const LOAD_HEROES_FAILURE = 'LOAD_HEROES_FAILURE'
export const LOAD_HEROES_LOADING = 'LOAD_HEROES_LOADING'
export const SAVE_HERO_NAME = 'SAVE_HERO_NAME'

export const SORT_HEROES_BY_LOCATION = 'SORT_HEROES_BY_LOCATION'
export const SORT_HEROES_BY_NAME = 'SORT_HEROES_BY_NAME'

export const FILTER_HEROES_BY_SEX = 'FILTER_HEROES_BY_SEX'
export const FILTER_HEROES_BY_STATUS = 'FILTER_HEROES_BY_STATUS'
export const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS'

export const saveHeroNameAC = (name: string) => {
  return {
    type: SAVE_HERO_NAME, 
    payload: name
  }
}

export const loadHeroesAC = (payload: {name?: string, page: string}) => {
  return {
    type: LOAD_HEROES, 
    payload: payload
  }
}

export const loadMoreHeroesAC = (payload: {name?: string, page: string}) => {
  return {
    type: LOAD_MORE_HEROES,
    payload: payload
  }
}

export const sortHeroesByLocationAC = (payload: boolean) => {
  return {
    type: SORT_HEROES_BY_LOCATION,
    payload: payload
  }
}

export const sortHeroesByNameAC = (payload: boolean) => {
  return {
    type: SORT_HEROES_BY_NAME,
    payload: payload
  }
}

export const filterHeroesBySex = (payload: string) => {
  return {
    type: FILTER_HEROES_BY_SEX,
    payload: payload
  }
}

export const filterHeroesByStatus = (payload: string) => {
  return {
    type: FILTER_HEROES_BY_STATUS,
    payload: payload
  }
}
export const clearAllFilters = () => {
  return {
    type: CLEAR_ALL_FILTERS,
  }
}