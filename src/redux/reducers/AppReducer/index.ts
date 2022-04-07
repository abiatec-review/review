
import { ACCEPT_COOKIES } from "redux/actions/AppActions"

const initialState = {
  isAcceptCookies: false,
  globalError: ''
}

export default function AppReducer(state = initialState, action: any): any {
  switch (action.type) {
    case ACCEPT_COOKIES: {
      return {
        ...state,
        isAcceptCookies: action.payload,
      }
    }
    default: return state
  }
  
}