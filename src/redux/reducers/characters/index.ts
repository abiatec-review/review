import {
  CharactersAction,
  CharactersActionTypes,
} from '../../actions/characters/action-types';
import { Characters } from '../../../types/types';

const nextCharactersPageNumber = (link: string) =>
  link ? link.split('=')[1] : null;

type CharactersProps = {
  themeMode: string;
  characters: Characters[];
  favoriteCharacters: Characters[];
  nextCharactersPage: string;
  charactersLoader: boolean;
  favoriteCharactersLoader: boolean;
};

const initState: CharactersProps = {
  themeMode: 'dark',
  characters: [],
  favoriteCharacters: [],
  nextCharactersPage: '',
  charactersLoader: false,
  favoriteCharactersLoader: false,
};

const CharactersReducer = (state = initState, action: CharactersAction) => {
  switch (action.type) {
    case CharactersActionTypes.GET_CHARACTERS: {
      return {
        ...state,
        characters: action.payload.results,
        nextCharactersPage:
          action.payload.info.next &&
          nextCharactersPageNumber(action.payload.info.next),
        charactersLoader: true,
      };
    }
    case CharactersActionTypes.GET_CHARACTERS_SUCCESS: {
      return {
        ...state,
        charactersLoader: false,
      };
    }
    case CharactersActionTypes.GET_USER_FAVORITE_CHARACTERS: {
      return {
        ...state,
        favoriteCharactersLoader: true,
      };
    }
    case CharactersActionTypes.GET_USER_FAVORITE_CHARACTERS_SUCCESS: {
      return {
        ...state,
        favoriteCharacters: action.payload.favoriteCharacters,
        favoriteCharactersLoader: false,
      };
    }
    case CharactersActionTypes.GET_NEXT_CHARACTERS: {
      return {
        ...state,
        characters: [...state.characters, ...action.payload.results],
        nextCharactersPage:
          action.payload.info.next &&
          nextCharactersPageNumber(action.payload.info.next),
        charactersLoader: true,
      };
    }

    case CharactersActionTypes.GET_NEXT_CHARACTERS_SUCCESS: {
      return {
        ...state,
        charactersLoader: false,
      };
    }
    case CharactersActionTypes.CHANGE_THEME: {
      return {
        ...state,
        themeMode: action.payload.themeMode,
      };
    }
    default:
      return state;
  }
};

export default CharactersReducer;
