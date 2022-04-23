import { CharacterAction, CharacterActionType } from "@redux/models/actions";
import { CharacterReducer } from "@redux/models/reducers";

const initialState: CharacterReducer = {
  characters: { nextPage: 1, hasMore: true, items: [] },
  filteredCharacters: { nextPage: 1, hasMore: true, items: [] }
};

export function characterReducer(state = initialState, action: CharacterAction): CharacterReducer {
  const { type } = action;

  switch (type) {
    case CharacterActionType.GET_FILTERED_CHARACTERS_SUCCESS: {
      const { payload } = action;
      const pagedData = payload.data;
      return {
        ...state,
        error: undefined,
        filteredCharacters: {
          ...pagedData,
          items: [...state.filteredCharacters.items, ...pagedData.items]
        }
      };
    }
    case CharacterActionType.GET_FILTERED_CHARACTERS_FAILED: {
      const { payload } = action;
      return { ...state, error: payload.error };
    }
    case CharacterActionType.GET_CHARACTERS_SUCCESS: {
      const { payload } = action;
      const pagedData = payload.data;
      return {
        ...state,
        error: undefined,
        characters: { ...pagedData, items: [...state.characters.items, ...pagedData.items] }
      };
    }
    case CharacterActionType.GET_CHARACTERS_FAILED: {
      const { payload } = action;
      return { ...state, error: payload.error };
    }
    default:
      return state;
  }
}
