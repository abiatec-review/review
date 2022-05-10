import { getIds } from './../utils/utils';
const api = 'https://rickandmortyapi.com/api';

export const fetchEpisodesById = async (episodes: string[]) => {
  const idsOfEpisodes = getIds(episodes);

  const response = await fetch(`${api}/episode/${idsOfEpisodes}`);

  return response.json();
};