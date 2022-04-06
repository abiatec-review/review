import { Character } from "@redux/models/entities";

import { FailedAction, SuccessAction } from "./action";
import { LoadingAction } from "./loading";

export const enum CharacterActionType {
  GET_CHARACTER_SUCCESS = "GET_CHARACTER_SUCCESS",
  GET_CHARACTER_FAILED = "GET_CHARACTER_FAILED",
  GET_CHARACTER_LIST_SUCCESS = "GET_CHARACTER_LIST_SUCCESS",
  GET_CHARACTER_LIST_FAILED = "GET_CHARACTER_LIST_FAILED"
}

type GetCharacterSuccessAction = SuccessAction<
  CharacterActionType.GET_CHARACTER_SUCCESS,
  Character
>;

type GetCharacterFailedAction = FailedAction<CharacterActionType.GET_CHARACTER_FAILED>;

type GetCharacterListSuccessAction = SuccessAction<
  CharacterActionType.GET_CHARACTER_LIST_SUCCESS,
  Array<Character>
>;

type GetCharacterListFailedAction = FailedAction<CharacterActionType.GET_CHARACTER_LIST_FAILED>;

export type CharacterAction =
  | GetCharacterSuccessAction
  | GetCharacterFailedAction
  | GetCharacterListSuccessAction
  | GetCharacterListFailedAction
  | LoadingAction;
