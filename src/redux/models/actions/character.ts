import { Character } from "@redux/models/entities";

import { FailedAction, SuccessAction } from "./action";
import { LoadingAction } from "./loading";

export const enum CharacterActionType {
  GET_FILTERED_CHARACTERS_SUCCESS = "GET_CHARACTER_SUCCESS",
  GET_FILTERED_CHARACTERS_FAILED = "GET_CHARACTER_FAILED",
  GET_CHARACTERS_SUCCESS = "GET_CHARACTER_LIST_SUCCESS",
  GET_CHARACTERS_FAILED = "GET_CHARACTER_LIST_FAILED"
}

type GetFilteredCharactersSuccessAction = SuccessAction<
  CharacterActionType.GET_FILTERED_CHARACTERS_SUCCESS,
  { page: number; characters: Array<Character> }
>;

type GetFilteredCharactersFailedAction =
  FailedAction<CharacterActionType.GET_FILTERED_CHARACTERS_FAILED>;

type GetCharacterListSuccessAction = SuccessAction<
  CharacterActionType.GET_CHARACTERS_SUCCESS,
  Array<Character>
>;

type GetCharacterListFailedAction = FailedAction<CharacterActionType.GET_CHARACTERS_FAILED>;

export type CharacterAction =
  | GetFilteredCharactersSuccessAction
  | GetFilteredCharactersFailedAction
  | GetCharacterListSuccessAction
  | GetCharacterListFailedAction
  | LoadingAction;
