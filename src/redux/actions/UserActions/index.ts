export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'
export const LOAD_USER_LOADING = 'LOAD_USER_LOADING'

export const LOAD_ANY_ERROR = 'LOAD_ANY_ERROR'

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'

export const signUpAC = (loginField: string, passwordField: string): any => {
  return { 
    type: SIGN_UP_REQUEST,
    payload: {loginField, passwordField}
   }
}

export const signInAC = (loginField: string, passwordField: string): any => {
  return { 
    type: SIGN_IN_REQUEST,
    payload: {loginField, passwordField}
   }
}

export const logoutAC = () => {
  return { 
    type: LOG_OUT_REQUEST
   }
}

export const loadUserAC = (user: any) => {
  return { 
    type: LOAD_USER_REQUEST, 
    payload: user
  }
}