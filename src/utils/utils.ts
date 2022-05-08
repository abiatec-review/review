import { Character } from '../models/CharacterReducer';
import { Episode } from '../models/EpisodeReducer';
import { Ascending, Descending } from './constants';

export const getIds = (values: string[]) => values.map((value: string) => value.split('/').slice(-1).join(''));

export const getFirstThree = (characters: string[]) => getIds(characters.slice(0, 3));

export const saveCharsForEpisodes = (episodes: Episode[]) => episodes.reduce((acc: { [key: string]: string[] }, curr) => {
  const temp = getIds(curr.characters.slice(0, 3));
  acc[curr.name] = temp;
  return acc;
}, {});

export const transformResponse = (characters: Character[]) => characters.reduce((acc: { [key: string]: Character }, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

export const sortByNames = (characters: Character[], order: string) => {
  if (order === Ascending) {
    return characters.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (order === Descending) {
    return characters.sort((a, b) => b.name.localeCompare(a.name));
  }

  return [];
};