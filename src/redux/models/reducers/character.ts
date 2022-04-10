import { Character } from "@redux/models/entities";

export interface CharacterReducer {
  error?: string;
  isLoading: boolean;
  filterName?: string;
  characters: Array<Character>;
  filteredCharacters: Array<Character>;
}
