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
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterLocation | null;
  location: CharacterLocation | null;
  image: string;
  episode: string[];
}

export interface CharacterState {
  characterName: string;
  characters: Character[];
  currentCharacter: Character;
  page: number;
  info: PageInfo;
  genderFilter: string,
  statusFilter: string,
}