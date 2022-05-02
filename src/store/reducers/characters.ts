import { CharacterState } from '../../models/CharacterReducer';
import { CharacterAction, CharacterActionTypes } from '../../types/CharacterTypes';

const { SAVE_CHARACTER_NAME, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_MORE_SUCCESS, SAVE_PAGE_INFO } = CharacterActionTypes;

const initialState = {
  characterName: '',
  characters: [],
  page: 1,
  info: {
    pages: 0,
    count: 0,
    prev: '',
    next: '',
  },
};

const charactersReducer = (state: CharacterState = initialState, action: CharacterAction): CharacterState => {
  switch (action.type) {
    case SAVE_CHARACTER_NAME:
      return {
        ...state,
        characterName: action.payload,
      };
    case SAVE_PAGE_INFO:
      return {
        ...state,
        info: action.payload,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state, characters: action.payload,
      };
    case FETCH_CHARACTERS_MORE_SUCCESS:
      return {
        ...state, characters: [...state.characters, ...action.payload],
      };
    default: return state;
  }
};

export default charactersReducer;