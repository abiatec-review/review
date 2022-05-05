import { Character } from './CharacterReducer';
import { BaseModel } from './BaseModel';

export interface Episode extends BaseModel {
  air_date: string
  episode: string
  characters: string[]
}

export interface EpisodesState {
  episodes: Episode[] | null,
  charactersInEpisode: { [key: string]: Character[] } | null,
}