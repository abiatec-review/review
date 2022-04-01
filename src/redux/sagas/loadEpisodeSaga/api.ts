const API = 'https://rickandmortyapi.com/api';

export const getEpisode = async (payload: string) => {
  const res = await fetch(`${API}/episode/${payload}`)
  return await res.json()
}

export const getHeroesInfo = async (payload: string[]) => {
  const res1 = await fetch(`${API}/character/${payload[0]}`);
  const res2 = await fetch(`${API}/character/${payload[1]}`)
  const res3 = await fetch(`${API}/character/${payload[2]}`)
  const result1 = await res1.json()
  const result2 = await res2.json()
  const result3 = await res3.json()


  return [result1, result2, result3]
}