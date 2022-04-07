import { LOAD_USER_SUCCESS, LOAD_ANY_ERROR, LOAD_USER_LOADING } from "redux/actions/UserActions"

const defaultState = {
  email: "",
  error: '',
  isLoading: true
}

export default function userReducer(state = defaultState, action: any): any {
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