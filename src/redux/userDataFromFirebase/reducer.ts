import {
  UserDataFireBaseAction,
  UserDataFromFirebaseActionTypes,
} from './action-types';

type initStateProps = {
  faireBaseData: {
    favoriteChars: { charId?: number }[] | '';
    additionalData?: string;
  };
  loader: boolean;
  errorMessage: string | null;
};

const initState: initStateProps = {
  faireBaseData: {
    favoriteChars: '',
    additionalData: '',
  },
  loader: false,
  errorMessage: null,
};

const FairebaseUserDataReducer = (
  state = initState,
  action: UserDataFireBaseAction,
): initStateProps => {
  switch (action.type) {
    case UserDataFromFirebaseActionTypes.GET_FIREBASE_USER_DATA: {
      return {
        ...state,
        loader: true,
      };
    }
    case UserDataFromFirebaseActionTypes.GET_FIREBASE_USER_DATA_SUCCESS: {
      return {
        ...state,
        faireBaseData: action.payload,
        loader: false,
      };
    }
    case UserDataFromFirebaseActionTypes.GET_FIREBASE_USER_DATA_ERROR: {
      return {
        ...state,
        errorMessage: 'Test error message',
        loader: false,
      };
    }
    // here start put reducers
    case UserDataFromFirebaseActionTypes.PUT_FIREBASE_USER_DATA: {
      return {
        ...state,
        loader: true,
      };
    }
    case UserDataFromFirebaseActionTypes.PUT_FIREBASE_USER_DATA_SUCCESS: {
      return {
        ...state,
        loader: false,
      };
    }
    case UserDataFromFirebaseActionTypes.PUT_FIREBASE_USER_DATA_ERROR: {
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
