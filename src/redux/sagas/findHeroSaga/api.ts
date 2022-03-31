const API = 'https://rickandmortyapi.com/api';

export const getHeroes = async (payload: string) => {
  const res = await fetch(`${API}/character/?name=${payload}`)
  return await res.json()
}