import * as actionTypes from '../actionTypes'

interface typesState {
    aboutUser: object
}
const initialState: typesState = {
    aboutUser: {}
};

const AuthReducer= (state = initialState, action: {payload: object, type: string}) => {
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