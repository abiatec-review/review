import { Character } from "@redux/models/entities";

export interface CharacterReducer {
  error?: string;
  isLoading: boolean;
  character: Character;
  characterList: Array<Character>;
}
