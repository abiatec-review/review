import { IResults } from '../../models/responseTypes';

export interface CharacterState {
  characters: IResults[],
  loading: boolean,
  error: null | string,
}

export enum CharacterActionTypes {
  FETCH_CHARACTER = 'FETCH_CHARACTER',
  FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS',
  FETCH_CHARACTER_ERROR = 'FETCH_CHARACTER_ERROR',
}

interface FetchCharacterAction {
  type: CharacterActionTypes.FETCH_CHARACTER,
  payload: string[],
}

interface FetchCharacterSuccessAction {
  type: CharacterActionTypes.FETCH_CHARACTER_SUCCESS,
  payload: IResults[],
}

interface FetchCharacterErrorAction {
  type: CharacterActionTypes.FETCH_CHARACTER_ERROR,
  payload: string,
}

export type CharacterAction = FetchCharacterAction | FetchCharacterSuccessAction | FetchCharacterErrorAction;

export const fetchCharacterAction = (links: string[]) => ({
  type: CharacterActionTypes.FETCH_CHARACTER,
  payload: links,
});
