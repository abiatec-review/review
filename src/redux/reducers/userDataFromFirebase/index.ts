import { GetFaireBaseDataSuccess } from 'src/types/types';
import { UserDataFromFirebaseActionTypes } from '../../actions/userDataFromFirebase/action-types';

type initStateProps = {
  faireBaseData: null | GetFaireBaseDataSuccess;
  loader: boolean;
  errorMessage: string | null;
};

const initState: initStateProps = {
  faireBaseData: null,
  loader: false,
  errorMessage: null,
};

const FairebaseUserDataReducer = (
  state = initState,
  action: { type: string; payload: any },
) => {
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
        faireBaseData: action.payload.favoriteChars,
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
