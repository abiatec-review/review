import axios from 'axios';
import { ref } from 'vue';

const useFetch = async (name: string, page: number) => {
  const baseURL = 'https://rickandmortyapi.com/api/character';
  const charactersList = ref(null);
  const error = ref('');

  try {
    const { data } = await axios.get(`${baseURL}?name=${name}&page=${page}`);
    charactersList.value = data.results;
  } catch {
    if (page === 1) {
      error.value = 'There is no such an characher. Try another one!';
    } else {
      error.value = 'There is no more characters by this name!';
    }
  }

  return { charactersList, error };
};

export default useFetch;
