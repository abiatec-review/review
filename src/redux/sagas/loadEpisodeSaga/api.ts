const API = 'https://rickandmortyapi.com/api';

export const getEpisode = async (payload: string) => {
  const res = await fetch(`${API}/episode/${payload}`)
  return await res.json()
}

export const getHeroesInfo = async (payload: string[]) => {
  const character1 = await fetch(`${API}/character/${payload[0]}`);
  const character2 = await fetch(`${API}/character/${payload[1]}`)
  const character3 = await fetch(`${API}/character/${payload[2]}`)
  
  const result1 = await character1.json()
  const result2 = await character2.json()
  const result3 = await character3.json()

  return [result1, result2, result3]
}