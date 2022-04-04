import {actionsTypes} from '../actions/actionsType';

const initState: any = {
  themeMode: 'dark',
  characters: [],
  nextCharactersPage: '',
  charactersLoader: false,
};

const Characters = (
  state = initState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case actionsTypes.GET_CHARACTERS: {
      return {
        ...state,
        characters: action.payload.results,
        nextCharactersPage: action.payload.info.next.split('=')[1],
        charactersLoader: true,
      };
    }
    case actionsTypes.GET_CHARACTERS_SUCSESS: {
      return {
        ...state,
        charactersLoader: false,
      };
    }

    case actionsTypes.GET_NEXT_CHARACTERS: {
      return {
        ...state,
        characters: [...state.characters, ...action.payload.results],
        nextCharactersPage: action.payload.info.next.split('=')[1],
        charactersLoader: true,
      };
    }

    case actionsTypes.GET_NEXT_CHARACTERS_SUCSESS: {
      return {
        ...state,
        charactersLoader: false,
      };
    }
    case actionsTypes.CHANGE_THEME: {
      return {
        ...state,
        themeMode: action.payload.themeMode,
      };
    }
    default:
      return state;
  }
};

export default Characters;
