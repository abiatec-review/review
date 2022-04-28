import { CharacterAction, CharacterActionTypes } from '../../types/CharacterTypes';

const { SAVE_CHARACTER_NAME, FETCH_CHARACTERS_SUCCESS } = CharacterActionTypes;

const initialState = {
  characterName: '',
  characters: [],
};

const characters = (state = initialState, action: CharacterAction) => {
  switch (action.type) {
    case SAVE_CHARACTER_NAME:
      console.log(state);
      return {
        ...state,
        characterName: action.payload,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state, characters: action.payload,
      };
    default: return state;
  }
};

export default characters;