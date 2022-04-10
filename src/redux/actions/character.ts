import { CharacterAction, CharacterActionType } from "@redux/models/actions";
import { Character } from "@redux/models/entities";

export function getFilteredCharactersSuccessAction(
  characters: Array<Character>,
  page: number
): CharacterAction {
  return {
    type: CharacterActionType.GET_FILTERED_CHARACTERS_SUCCESS,
    payload: { data: { characters, page } }
  };
}

export function getFilteredCharactersFailedAction(error: string): CharacterAction {
  return {
    type: CharacterActionType.GET_FILTERED_CHARACTERS_FAILED,
    payload: { error }
  };
}

export function getCharactersSuccessAction(data: Array<Character>): CharacterAction {
  return {
    type: CharacterActionType.GET_CHARACTERS_SUCCESS,
    payload: { data }
  };
}

export function getCharactersFailedAction(error: string): CharacterAction {
  return {
    type: CharacterActionType.GET_CHARACTERS_FAILED,
    payload: { error }
  };
}
