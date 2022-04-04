import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const services = {
  async getCharacters() {
    const response = await instance.get('character');
    return response.data;
  },
  async getNextCharacters(nextCharacters: string) {
    const response = await instance.get(`character?page=${nextCharacters}`);
    return response.data;
  },
};
