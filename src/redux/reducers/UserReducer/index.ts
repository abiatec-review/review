import { IUserState } from './types';
import { LOAD_USER_SUCCESS, LOAD_ANY_ERROR, LOAD_USER_LOADING } from "redux/actions/UserActions"
import { IUserActions } from "redux/actions/UserActions/types"

const defaultState: IUserState = {
  email: '',
  error: '',
  isLoading: true
}

export default function userReducer(state = defaultState, action: IUserActions): IUserState {
  switch (action.type) {
    case LOAD_USER_SUCCESS: {
      return {
        ...state,
        email: action.payload,
        error: '',
        isLoading: false,
      }
    }
    case LOAD_ANY_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
    case LOAD_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    default: return state
  }
}