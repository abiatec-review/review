import { CharacterState } from '../../models/CharacterReducer';
import { CharacterAction, CharacterActionTypes } from '../../types/CharacterTypes';

const {
  SAVE_CHARACTER_NAME,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_MORE_SUCCESS,
  SAVE_PAGE_INFO,
  FETCH_SINGLE_CHARACTER_SUCCESS,
  SET_GENDER_FILTER,
  SET_STATUS_FILTER,
} = CharacterActionTypes;

const initialState = {
  characterName: '',
  characters: [],
  page: 1,
  currentCharacter: {
    id: 1,
    name: '',
    url: '',
    created: '',
    status: '',
    species: '',
    type: '',
    gender: 'unknown',
    origin: null,
    location: null,
    image: '',
    episode: [],
  },
  info: {
    pages: 0,
    count: 0,
    prev: '',
    next: '',
  },
  genderFilter: '',
  statusFilter: '',
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
    case FETCH_SINGLE_CHARACTER_SUCCESS:
      return {
        ...state, currentCharacter: action.payload,
      };
    case FETCH_CHARACTERS_MORE_SUCCESS:
      return {
        ...state, characters: [...state.characters, ...action.payload],
      };
    case SET_GENDER_FILTER:
      return {
        ...state, genderFilter: action.payload,
      };
    case SET_STATUS_FILTER:
      return {
        ...state, statusFilter: action.payload,
      };
    default: return state;
  }
};

export default charactersReducer;