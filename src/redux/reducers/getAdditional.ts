import {
  AdditionalActions,
  AdditionalDataActionTypes,
} from '../actions/additionalData/action-types';

const initState: any = {
  additionalDataFromUrl: null,
  loader: null,
  charactersFromEpisode: null,
  charactersFromLocation: null,
};

const AdditionalData = (state = initState, action: AdditionalActions) => {
  switch (action.type) {
    case AdditionalDataActionTypes.GET_ADDITIONAL: {
      return {
        ...state,
        loader: true,
      };
    }
    case AdditionalDataActionTypes.SET_EPISODE_CHARACTERS: {
      return {
        ...state,
        loader: false,
        charactersFromEpisode: action.payload.charactersFromEpisode,
      };
    }
    case AdditionalDataActionTypes.SET_CHARACTERS_FROM_LOCATION: {
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
