import { CharacterAction, CharacterActionType } from "@models/actions";
import { Character } from "@models/entities";

export function getCharacterAction(character: Character): CharacterAction {
  return {
    type: CharacterActionType.GET_CHARACTER,
    payload: { character }
  };
}

export function getCharactersListAction(characters: Array<Character>): CharacterAction {
  return {
    type: CharacterActionType.GET_CHARACTER_LIST,
    payload: { characters }
  };
}
