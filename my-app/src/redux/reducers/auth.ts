import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
    SIGN_IN_WITH_EMAIL_AND_PASSWORD_SUCCESS, SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAILED, SIGN_OUT
} from '../actionTypes'

const initialState = {
    aboutUser: ''
};

const AuthReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS: {
            return {
                ...state,
                aboutUser: action.payload
            }
        }
        case SIGN_UP_FAILED: {
            return {
                aboutUser: ''
            }
        }
        case SIGN_IN_WITH_EMAIL_AND_PASSWORD_SUCCESS: {
            return {
                ...state,
                aboutUser: action.payload
            }
        }
        case SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAILED: {
            return {
                aboutUser: ''
            }
        }
        case SIGN_OUT: {
            return {
                aboutUser: ''
            }
        }
        default: return state
    }
}

export default AuthReducer;