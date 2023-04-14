import { actionsTypes } from '../actions/actionsType';

const initState: any = {
  uniqueId: null,
  faireBaseData: null,
  loader: false,
  errorMessage: null,
};

const FairebaseUserDataReducer = (
  state = initState,
  action: { type: string; payload: any },
) => {
  switch (action.type) {
    case actionsTypes.GET_FAIRBASE_USER_DATA: {
      return {
        ...state,
        loader: true,
      };
    }
    case actionsTypes.GET_FAIRBASE_USER_DATA_SUCCESS: {
      return {
        ...state,
        uniqueId: Object.keys(action.payload.fairbaseData)[0],
        faireBaseData: action.payload.fairbaseData,
        loader: false,
      };
    }
    case actionsTypes.GET_FAIRBASE_USER_DATA_ERROR: {
      return {
        ...state,
        errorMessage: 'Test error message',
        loader: false,
      };
    }
    // here start put reducers
    case actionsTypes.PUT_FAIRBASE_USER_DATA: {
      return {
        ...state,
        loader: true,
      };
    }
    case actionsTypes.PUT_FAIRBASE_USER_DATA_SUCCESS: {
      return {
        ...state,
        loader: false,
      };
    }
    case actionsTypes.PUT_FAIRBASE_USER_DATA_ERROR: {
      return {
        ...state,
        errorMessage: 'Test error message',
        loader: false,
      };
    }
    default:
      return state;
  }
};

export default FairebaseUserDataReducer;
