const api = 'https://rickandmortyapi.com/api';

export const fetchCharactersBySearchQuery = async (name: string, page: number = 1, statusFilterState: string = '', genderFilterState: string = '') => {
  const response = await fetch(`${api}/character/?page=${page}&name=${name}&status=${statusFilterState}&gender=${genderFilterState}`);

  return response.json();
};

export const fetchCharactersByIds = async (ids: string[]) => {
  const response = await fetch(`${api}/character/${ids}`);

  return response.json();
};