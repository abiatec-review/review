import { PageInfo } from '../models/CharacterReducer';

export enum CharacterActionTypes {
  FETCH_CHARACTERS = 'FETCH_CHARACTERS',
  FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS',
  FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR',
  FETCH_CHARACTERS_MORE = 'FETCH_CHARACTERS_MORE',
  FETCH_CHARACTERS_MORE_SUCCESS = 'FETCH_CHARACTERS_MORE_SUCCESS',
  SAVE_CHARACTER_NAME = 'SAVE_CHARACTER_NAME',
  SAVE_PAGE_INFO = 'SAVE_PAGE_INFO',
}

interface SaveNameAction {
  type: CharacterActionTypes.SAVE_CHARACTER_NAME,
  payload: string,
}
interface SavePageInfo {
  type: CharacterActionTypes.SAVE_PAGE_INFO,
  payload: PageInfo,
}

interface FetchCharactersAction {
  type: CharacterActionTypes.FETCH_CHARACTERS,
  payload: string,
}

interface FetchCharactersSuccessAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
  payload: any[], // TODO: Fix type
}

interface FetchCharactersMoreAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_MORE_SUCCESS,
  payload: any[], // TODO: Fix type
}

interface FetchCharactersErrorAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
  payload: string
}

export type CharacterAction =
  FetchCharactersAction |
  FetchCharactersSuccessAction |
  FetchCharactersErrorAction |
  SaveNameAction |
  SavePageInfo |
  FetchCharactersMoreAction;