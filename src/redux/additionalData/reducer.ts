import { Characters } from 'src/types/types';
import {
  AdditionalActions,
  AdditionalDataActionTypes,
} from '../../redux/additionalData/action-types';

type AdditionalDataProps = {
  additionalDataFromUrl: string | null;
  loader: boolean;
  charactersFromEpisode: Characters[] | null;
  charactersFromLocation: Characters[] | null;
};

const initState: AdditionalDataProps = {
  additionalDataFromUrl: null,
  loader: false,
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
        charactersFromEpisode: action.payload,
      };
    }
    case AdditionalDataActionTypes.SET_CHARACTERS_FROM_LOCATION: {
      return {
        ...state,
        loader: false,
        charactersFromLocation: action.payload,
      };
    }
    default:
      return state;
  }
};

export default AdditionalData;
