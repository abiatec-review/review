import {actionsTypes} from '../actions/actionsType';

const initState: any = {
  characters: [],
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
        characters: action.payload,
        charactersLoader: true,
      };
    }
    case actionsTypes.GET_CHARACTERS_SUCSESS: {
      return {
        ...state,
        characters: action.payload,
        charactersLoader: false,
      };
    }
    default:
      return state;
  }
};

export default Characters;
