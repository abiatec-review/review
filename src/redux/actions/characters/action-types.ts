import {
  allDataInfo,
  FavoriteCharactersParams,
  FavoriteCharactersSuccessParams,
  NextCharactersParams,
  ThemeModeParams,
} from 'src/types/types';

export const enum CharactersActionTypes {
  GET_CHARACTERS = 'GET_CHARACTERS',
  GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS',
  GET_NEXT_CHARACTERS = 'GET_NEXT_CHARACTERS',
  GET_NEXT_CHARACTERS_SUCCESS = 'GET_NEXT_CHARACTERS_SUCCESS',
  GET_USER_FAVORITE_CHARACTERS = 'GET_USER_FAVORITE_CHARACTERS',
  CHANGE_THEME = 'CHANGE_THEME',
  GET_USER_FAVORITE_CHARACTERS_SUCCESS = 'GET_USER_FAVORITE_CHARACTERS_SUCCESS',
}

export type GetChartersActionType = {
  type: CharactersActionTypes.GET_CHARACTERS;
  payload: allDataInfo;
};

export type GetChartersSuccessActionType = {
  type: CharactersActionTypes.GET_CHARACTERS_SUCCESS;
};

export type GetNextChartersActionType = {
  type: CharactersActionTypes.GET_NEXT_CHARACTERS;
  payload: allDataInfo;
};

export type GetNextChartersSuccessActionType = {
  type: CharactersActionTypes.GET_NEXT_CHARACTERS_SUCCESS;
  payload: NextCharactersParams;
};

export type ChangeThemeModeActionType = {
  type: CharactersActionTypes.CHANGE_THEME;
  payload: ThemeModeParams;
};

export type GetFavoriteCharactersActionType = {
  type: CharactersActionTypes.GET_USER_FAVORITE_CHARACTERS;
  payload: FavoriteCharactersParams;
};

export type GetFavoriteCharactersSuccessActionType = {
  type: CharactersActionTypes.GET_USER_FAVORITE_CHARACTERS_SUCCESS;
  payload: FavoriteCharactersSuccessParams;
};

export type CharactersAction =
  | GetChartersActionType
  | GetChartersSuccessActionType
  | GetNextChartersActionType
  | GetNextChartersSuccessActionType
  | ChangeThemeModeActionType
  | GetFavoriteCharactersActionType
  | GetFavoriteCharactersSuccessActionType;
