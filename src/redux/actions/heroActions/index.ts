export const LOAD_HEROES = 'LOAD_HEROES'
export const LOAD_MORE_HEROES = 'LOAD_MORE_HEROES'
export const LOAD_MORE_HEROES_SUCCESS = 'LOAD_MORE_HEROES_SUCCESS'
export const LOAD_HEROES_SUCCESS = 'LOAD_HEROES_SUCCESS'
export const LOAD_HEROES_FAILURE = 'LOAD_HEROES_FAILURE'
export const LOAD_HEROES_LOADING = 'LOAD_HEROES_LOADING'
export const SAVE_HERO_NAME = 'SAVE_HERO_NAME'

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