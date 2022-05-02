import { Character, PageInfo } from '../../models/CharacterReducer';
import { CharacterActionTypes } from './../../types/CharacterTypes';

const {
  FETCH_CHARACTERS,
  SAVE_CHARACTER_NAME,
  SAVE_PAGE_INFO,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_MORE,
  FETCH_CHARACTERS_MORE_SUCCESS,
  FETCH_SINGLE_CHARACTER_SUCCESS,
} = CharacterActionTypes;

export const FetchCharacters = ( payload: { searchString: string, pageNumber: number } ) => ({
  type: FETCH_CHARACTERS,
  payload,
});

export const FetchCharactersMore = ( payload: { searchString: string, pageNumber: number } ) => ({
  type: FETCH_CHARACTERS_MORE,
  payload,
});

export const SaveCharacterName = ( payload: string ) => ({
  type: SAVE_CHARACTER_NAME,
  payload,
});

export const SavePageInfo = ( payload: PageInfo) => ({
  type: SAVE_PAGE_INFO,
  payload,
});

export const FetchCharactersSuccess = (payload: { characters: Character[] }) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload,
});

export const FetchCharactersMoreSuccess = (payload: { characters: Character[] }) => ({
  type: FETCH_CHARACTERS_MORE_SUCCESS,
  payload,
});

export const FetchSingleCharacterSuccess = (payload: Character ) => ({
  type: FETCH_SINGLE_CHARACTER_SUCCESS,
  payload,
});