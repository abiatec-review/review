import { CharacterAction, CharacterActionType } from "@models/actions";
import { Character } from "@models/entities";

export function getCharacterSuccessAction(data: Character): CharacterAction {
  return {
    type: CharacterActionType.GET_CHARACTER_SUCCESS,
    payload: { data }
  };
}

export function getCharacterFailedAction(error: string): CharacterAction {
  return {
    type: CharacterActionType.GET_CHARACTER_FAILED,
    payload: { error }
  };
}

export function getCharactersListSuccessAction(data: Array<Character>): CharacterAction {
  return {
    type: CharacterActionType.GET_CHARACTER_LIST_SUCCESS,
    payload: { data }
  };
}

export function getCharactersListFailedAction(error: string): CharacterAction {
  return {
    type: CharacterActionType.GET_CHARACTER_LIST_FAILED,
    payload: { error }
  };
}
