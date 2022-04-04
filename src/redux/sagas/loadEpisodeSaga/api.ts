const API = 'https://rickandmortyapi.com/api';

export const getEpisode = async (payload: string) => {
  const res = await fetch(`${API}/episode/${payload}`)
  return await res.json()
}

export const getHeroesInfo = async (payload: string[]) => {
  return await Promise.all(payload.map(async (elem) => {
    const result = await fetch(`${API}/character/${elem}`);
    return await result.json();
  })) 
}