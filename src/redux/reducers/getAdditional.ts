import {actionsTypes} from '../actions/actionsType';

const initState: any = {
  additionalDataFromUrl: null,
  loader: null,
  charactersFromEpisode: null,
  charactersFromLocation: null,
};

const AdditionalData = (
  state = initState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case actionsTypes.GET_ADDITIONAL: {
      return {
        ...state,
        loader: true,
      };
    }
    case actionsTypes.SET_EPISODE_CHARACTERS: {
      return {
        ...state,
        loader: false,
        charactersFromEpisode: action.payload.charactersFromEpisode,
      };
    }
    case actionsTypes.SET_CHARACTERS_FROM_LOCATION: {
      return {
        ...state,
        loader: false,
        characterFromLocation: action.payload.charactersFromLocation,
      };
    }
    default:
      return state;
  }
};

export default AdditionalData;
