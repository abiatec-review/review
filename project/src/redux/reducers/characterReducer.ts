import { CharacterState, CharacterActionTypes, CharacterAction } from '../actions/character';

const initialState: CharacterState = {
  characters: [],
  loading: false,
  error: null,
};

export const characterReducer = (state = initialState, action: CharacterAction): CharacterState => {
  switch (action.type) {
    case CharacterActionTypes.FETCH_CHARACTER: {
      return {
        ...state,
        loading: true,
      };
    }
    case CharacterActionTypes.FETCH_CHARACTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        characters: action.payload,
        error: null,
      };
    }
    case CharacterActionTypes.FETCH_CHARACTER_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
