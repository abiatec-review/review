import { CharacterAction, CharacterActionType } from "@redux/models/actions";
import { Character, PagedData } from "@redux/models/entities";

export function getFilteredCharactersSuccessAction(data: PagedData<Character>): CharacterAction {
  return {
    type: CharacterActionType.GET_FILTERED_CHARACTERS_SUCCESS,
    payload: { data }
  };
}

export function getFilteredCharactersFailedAction(error: string): CharacterAction {
  return {
    type: CharacterActionType.GET_FILTERED_CHARACTERS_FAILED,
    payload: { error }
  };
}

export function getCharactersSuccessAction(data: PagedData<Character>): CharacterAction {
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
