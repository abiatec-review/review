import { CharacterActionTypes } from './../../types/CharacterTypes';

const { FETCH_CHARACTERS, SAVE_CHARACTER_NAME, FETCH_CHARACTERS_SUCCESS } = CharacterActionTypes;

export const FetchCharacters = ( payload: string ) => ({
  type: FETCH_CHARACTERS,
  payload,
});

export const SaveCharacterName = ( payload: string ) => ({
  type: SAVE_CHARACTER_NAME,
  payload,
});

export const FetchCharactersSuccess = (payload: { characters: any[] }) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload,
});