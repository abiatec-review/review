import {Sign} from "../actions";

const initialState = {
  email: '',
  password: '',
  name: '',
  surname: '',
  logIn: false
}

export const authReducer = (state = initialState, action: { type: string; payload: {email: string, password: string, name: string, surname: string}; }) => {
  switch (action.type) {
    case Sign.SIGN_UP: {
      localStorage.setItem(action.payload.email, JSON.stringify({name: action.payload.name, surname: action.payload.surname, email: action.payload.email,
        password: action.payload.password}))
      localStorage.setItem('login',action.payload.email)
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        name: action.payload.name,
        surname: action.payload.surname,
        logIn: false
      }
    }
    case Sign.SIGN_IN: {
      localStorage.setItem('login', action.payload.email)
      return {
        ...state,
        logIn: true
      }
    }
    default:
      return state
  }
}
