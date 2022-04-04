const API = 'https://rickandmortyapi.com/api';

export interface IPayloadArguments {
  name: string;
  page?: string;
}

export const getHeroes = async ({name, page}: IPayloadArguments) => {
  const res = await fetch(`${API}/character/?name=${name}&page=${page || 1}`)
  return await res.json()
}