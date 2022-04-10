import { CharacterAction, CharacterActionType, LoadingActionType } from "@redux/models/actions";
import { CharacterReducer } from "@redux/models/reducers";

const initialState: CharacterReducer = {
  characters: [],
  isLoading: false,
  filteredCharacters: []
};

export function characterReducer(state = initialState, action: CharacterAction): CharacterReducer {
  const { type } = action;

  switch (type) {
    case CharacterActionType.GET_FILTERED_CHARACTERS_SUCCESS: {
      const { payload } = action;
      const { characters, page } = payload.data;
      return {
        ...state,
        error: undefined,
        filteredCharacters: page === 1 ? characters : [...state.filteredCharacters, ...characters]
      };
    }
    case CharacterActionType.GET_FILTERED_CHARACTERS_FAILED: {
      const { payload } = action;
      return { ...state, error: payload.error };
    }
    case CharacterActionType.GET_CHARACTERS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        error: undefined,
        characters: [...state.characters, ...payload.data]
      };
    }
    case CharacterActionType.GET_CHARACTERS_FAILED: {
      const { payload } = action;
      return { ...state, error: payload.error };
    }
    case LoadingActionType.START: {
      return { ...state, isLoading: true };
    }
    case LoadingActionType.STOP: {
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
}
