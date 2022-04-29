import {SIGN_IN, SIGN_UP} from "../actions";

const initialState = {
    email: '',
    password: '',
    name: '',
    surname: '',
    logIn: false
}

export const authReducer = (state = initialState, action: { type: string; payload: {email: string, password: string, name: string, surname: string}; }) => {
    switch (action.type) {
        case SIGN_UP: {
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
        case SIGN_IN: {
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

