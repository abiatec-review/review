import {signOut} from '../../Components/firebase';
import {actionsTypes} from '../actions/actionsType';

const initState: any = {
  userEmail: null,
  userName: null,
  userAvatar: null,
  avatarLoader: false,
  uid: null,
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
        userAvatar: action.payload.photoURL,
        uid: action.payload.UID,
      };
    }

    case actionsTypes.AUTHENTIFICATION_IDENTIFY: {
      return {
        ...state,
      };
    }

    case actionsTypes.AUTHENTIFICATION_IDENTIFY_SUCCESS: {
      return {
        ...state,
        userEmail: action.payload.email,
        token: action.payload.token,
        userName: action.payload.displayName,
        userAvatar: action.payload.photoURL,
        uid: action.payload.UID,
      };
    }
    case actionsTypes.AUTHENTIFICATION_SIGN_UP_SUCCESS: {
      return {
        ...state,
        authLoader: false,
        userEmail: action.payload.email,
        token: action.payload.token,
        userName: action.payload.displayName,
        uid: action.payload.UID,
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
        uid: null,
        token: null,
        authLoader: false,
        errorMessage: null,
      };
    }
    case actionsTypes.USER_LOAD_AVATAR: {
      return {
        ...state,
        avatarLoader: true,
      };
    }
    case actionsTypes.USER_LOAD_AVATAR_SUCCESS: {
      return {
        ...state,
        userAvatar: action.payload.newUserAvatar,
        avatarLoader: false,
      };
    }
    default:
      return state;
  }
};

export default Authentification;
