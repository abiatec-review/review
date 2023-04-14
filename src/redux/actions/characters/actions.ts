import {
  allDataInfo,
  FavoriteCharactersParams,
  NextCharactersParams,
  ThemeModeParams,
  FavoriteCharactersSuccessParams,
} from 'src/types/types';
import {
  ChangeThemeModeActionType,
  CharactersActionTypes,
  GetChartersActionType,
  GetChartersSuccessActionType,
  GetFavoriteCharactersActionType,
  GetFavoriteCharactersSuccessActionType,
  GetNextChartersActionType,
  GetNextChartersSuccessActionType,
} from './action-types';

export const getCharaters = (payload: allDataInfo): GetChartersActionType => {
  return {
    type: CharactersActionTypes.GET_CHARACTERS,
    payload,
  };
};

export const getCharatersSucsess = (): GetChartersSuccessActionType => {
  return {
    type: CharactersActionTypes.GET_CHARACTERS_SUCCESS,
  };
};

export const getNextCharaters = (
  payload: allDataInfo,
): GetNextChartersActionType => {
  return {
    type: CharactersActionTypes.GET_NEXT_CHARACTERS,
    payload,
  };
};

export const getNextCharatersSucsess = (
  payload: NextCharactersParams,
): GetNextChartersSuccessActionType => {
  return {
    type: CharactersActionTypes.GET_NEXT_CHARACTERS_SUCCESS,
    payload,
  };
};

export const changeThemeMode = (
  payload: ThemeModeParams,
): ChangeThemeModeActionType => {
  return {
    type: CharactersActionTypes.CHANGE_THEME,
    payload,
  };
};

export const getFavoriteCharacters = (
  payload: FavoriteCharactersParams,
): GetFavoriteCharactersActionType => {
  return {
    type: CharactersActionTypes.GET_USER_FAVORITE_CHARACTERS,
    payload,
  };
};

export const getFavoriteCharactersSuccess = (
  payload: FavoriteCharactersSuccessParams,
): GetFavoriteCharactersSuccessActionType => {
  return {
    type: CharactersActionTypes.GET_USER_FAVORITE_CHARACTERS_SUCCESS,
    payload,
  };
};
