import { BaseModel } from './BaseModel';

export interface CharacterLocation {
  name: string;
  url: string;
}

export interface PageInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Character extends BaseModel {
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}

export interface CharacterState {
  characterName: string;
  characters: Character[];
  page: number;
  info: PageInfo;
}