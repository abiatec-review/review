const api = 'https://rickandmortyapi.com/api';

export const fetchCharactersBySearchQuery = async (name: string, page: number = 1) => {
  const response = await fetch(`${api}/character/?page=${page}&name=${name}`); // Fix page parameter

  return response.json();
};