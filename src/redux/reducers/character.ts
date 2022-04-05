import { CharacterAction, CharacterActionType, LoadingActionType } from "@models/actions";
import { Character } from "@models/entities";
import { CharacterReducer } from "@models/reducers";

const initialState: CharacterReducer = {
  isLoading: false,
  characterList: [],
  character: {} as Character
};

export function characterReducer(state = initialState, action: CharacterAction): CharacterReducer {
  const { type } = action;

  switch (type) {
    case CharacterActionType.GET_CHARACTER_SUCCESS: {
      const { payload } = action;
      return { ...state, error: undefined, character: payload.data };
    }
    case CharacterActionType.GET_CHARACTER_FAILED: {
      const { payload } = action;
      return { ...state, error: payload.error };
    }
    case CharacterActionType.GET_CHARACTER_LIST_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        error: undefined,
        characterList: [...state.characterList, ...payload.data]
      };
    }
    case CharacterActionType.GET_CHARACTER_LIST_FAILED: {
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
