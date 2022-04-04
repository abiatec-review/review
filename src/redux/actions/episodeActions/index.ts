export const LOAD_EPISODE = 'LOAD_EPISODE'
export const LOAD_EPISODE_SUCCESS = 'LOAD_EPISODE_SUCCESS'
export const LOAD_HEROES_FROM_EPISODE = 'LOAD_HEROES_FROM_EPISODE'
export const LOAD_EPISODE_LOADING = 'LOAD_EPISODE_LOADING'

export const loadEpisodeAC = (episodeId: string) => {
  return {
    type: LOAD_EPISODE, 
    payload: episodeId
  }
}