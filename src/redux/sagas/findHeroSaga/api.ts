const API = 'https://rickandmortyapi.com/api';

export const getHeroes = async (name: any, page?: any) => {
  const res = await fetch(`${API}/character/?name=${name}&page=${page || 1}`)
  return await res.json()
}