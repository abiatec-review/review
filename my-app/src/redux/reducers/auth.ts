import * as actionTypes from '../actionTypes'

const initialState = {
    aboutUser: ''
};

const AuthReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.SIGN_UP_SUCCESS: {
            return {
                ...state,
                aboutUser: action.payload
            }
        }
        case actionTypes.SIGN_UP_FAILED: {
            return {
                aboutUser: ''
            }
        }
        case actionTypes.SIGN_IN_WITH_EMAIL_AND_PASSWORD_SUCCESS: {
            return {
                ...state,
                aboutUser: action.payload
            }
        }
        case actionTypes.SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAILED: {
            return {
                aboutUser: ''
            }
        }
        case actionTypes.SIGN_OUT: {
            return {
                aboutUser: ''
            }
        }
        default: return state
    }
}

export default AuthReducer;