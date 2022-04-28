export enum CharacterActionTypes {
  FETCH_CHARACTERS = 'FETCH_CHARACTERS',
  FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS',
  FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR',
  SAVE_CHARACTER_NAME = 'SAVE_CHARACTER_NAME',
}

interface SaveNameAction {
  type: CharacterActionTypes.SAVE_CHARACTER_NAME,
  payload: string,
}

interface FetchCharactersAction {
  type: CharacterActionTypes.FETCH_CHARACTERS,
  payload: string,
}

interface FetchCharactersSuccessAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
  payload: any[], // TODO: Fix type
}

interface FetchCharactersErrorAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
  payload: string
}

export type CharacterAction = FetchCharactersAction | FetchCharactersSuccessAction | FetchCharactersErrorAction | SaveNameAction;