import axios from 'axios';

const fetchCharactersList = async (page: number, name: string) => {
  const baseURL = 'https://rickandmortyapi.com/api/character';
  const { data } = await axios.get(`${baseURL}?name=${name}&page=${page}`);
  return data.results;
};

export default fetchCharactersList;
