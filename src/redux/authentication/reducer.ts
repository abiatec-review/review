import { signOut } from '../../utils/firebase';
import { AuthAction, AuthenticationActionTypes } from './action-types';
import { Reducer } from 'redux';
type AuthenticationProps = {
  userEmail?: string | null;
  userName?: string | null;
  userAvatar?: string | null;
  avatarLoader?: boolean;
  uid?: string | null;
  token?: string | null;
  authLoader?: boolean;
  errorMessage?: string | null;
};

const initState: AuthenticationProps = {
  userEmail: null,
  userName: null,
  userAvatar: null,
  avatarLoader: false,
  uid: null,
  token: null,
  authLoader: false,
  errorMessage: null,
};

const Authentication: Reducer<AuthenticationProps, AuthAction> = (
  state = initState,
  action: AuthAction,
) => {
  switch (action.type) {
    case AuthenticationActionTypes.AUTHENTICATION_SIGN_UP: {
      return {
        ...state,
        authLoader: true,
      };
    }
    case AuthenticationActionTypes.AUTHENTICATION_SIGN_IN: {
      return {
        ...state,
        authLoader: true,
      };
    }

    case AuthenticationActionTypes.AUTHENTICATION_SIGN_IN_SUCCESS: {
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

    case AuthenticationActionTypes.AUTHENTICATION_IDENTIFY: {
      return {
        ...state,
      };
    }

    case AuthenticationActionTypes.AUTHENTICATION_IDENTIFY_SUCCESS: {
      return {
        ...state,
        userEmail: action.payload.email,
        token: action.payload.token,
        userName: action.payload.displayName,
        userAvatar: action.payload.photoURL,
        uid: action.payload.UID,
      };
    }
    case AuthenticationActionTypes.AUTHENTICATION_SIGN_UP_SUCCESS: {
      return {
        ...state,
        authLoader: false,
        userEmail: action.payload.email,
        token: action.payload.token,
        userName: action.payload.displayName,
        uid: action.payload.UID,
      };
    }
    case AuthenticationActionTypes.AUTHENTICATION_SIGN_UP_ERROR: {
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        authLoader: false,
      };
    }
    case AuthenticationActionTypes.LOG_OUT_USER: {
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
    case AuthenticationActionTypes.USER_LOAD_AVATAR: {
      return {
        ...state,
        avatarLoader: true,
      };
    }
    case AuthenticationActionTypes.USER_LOAD_AVATAR_SUCCESS: {
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

export default Authentication;
