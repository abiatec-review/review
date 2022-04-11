import { Character, PagedData } from "@redux/models/entities";

export interface CharacterReducer {
  error?: string;
  filterName?: string;
  characters: PagedData<Character>;
  filteredCharacters: PagedData<Character>;
}
