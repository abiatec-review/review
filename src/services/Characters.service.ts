const api = 'https://rickandmortyapi.com/api';

export const fetchCharactersBySearchQuery = async (name: string) => {
  const response = await fetch(`${api}/character/?name=${name}`);

  return response.json();
};