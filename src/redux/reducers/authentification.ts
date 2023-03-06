import {getUser, signOut} from '../../Components/firebase';
import {actionsTypes} from '../actions/actionsType';

const initState: any = {
  userEmail: null,
  userName: null,
  userAvatar: null,
  token: null,
  authLoader: false,
  errorMessage: null,
};

const Authentification = (
  state = initState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case actionsTypes.AUTHENTIFICATION_SIGN_UP: {
      return {
        ...state,
        authLoader: true,
      };
    }
    case actionsTypes.AUTHENTIFICATION_SIGN_IN: {
      return {
        ...state,
        authLoader: true,
      };
    }

    case actionsTypes.AUTHENTIFICATION_SIGN_IN_SUCCESS: {
      return {
        ...state,
        authLoader: false,
        userEmail: action.payload.email,
        token: action.payload.token,
        userName: action.payload.displayName,
      };
    }

    case actionsTypes.AUTHENTIFICATION_IDENTIFY: {
      const userData: {
        _user: {displayName: string; email: string; refreshToken: string};
      } = getUser();
      return {
        ...state,
        userEmail: userData?._user.email,
        token: userData?._user.refreshToken,
        userName: userData?._user.displayName,
      };
    }
    case actionsTypes.AUTHENTIFICATION_SIGN_UP_SUCCESS: {
      return {
        ...state,
        authLoader: false,
        userEmail: action.payload.email,
        token: action.payload.token,
        userName: action.payload.displayName,
      };
    }
    case actionsTypes.AUTHENTIFICATION_SIGN_UP_ERROR: {
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        authLoader: false,
      };
    }
    case actionsTypes.LOG_OUT_USER: {
      signOut();
      return {
        ...state,
        userEmail: null,
        userName: null,
        userAvatar: null,
        token: null,
      };
    }
    case actionsTypes.USER_LOAD_AVATAR: {
      console.log(action.payload);
      return {
        ...state,
        userAvatar: null, // here we set new user avatar
      };
    }
    default:
      return state;
  }
};

export default Authentification;
