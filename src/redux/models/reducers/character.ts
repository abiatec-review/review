import { Character } from "@models/entities";

export interface CharacterReducer {
  isLoading: boolean;
  character: Character;
  characterList: Array<Character>;
}
