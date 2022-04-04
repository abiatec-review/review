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
    case CharacterActionType.GET_CHARACTER: {
      const { payload } = action;
      return { ...state, character: payload.character };
    }
    case CharacterActionType.GET_CHARACTER_LIST: {
      const { payload } = action;
      return {
        ...state,
        characterList: [...state.characterList, ...payload.characters]
      };
    }
    case LoadingActionType.START: {
      return {
        ...state,
        isLoading: true,
        characterList: [...state.characterList]
      };
    }
    case LoadingActionType.STOP: {
      return {
        ...state,
        isLoading: false,
        characterList: [...state.characterList]
      };
    }
    default:
      return state;
  }
}
