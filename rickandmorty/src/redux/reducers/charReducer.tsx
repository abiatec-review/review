import {GET_CHARACTERS, SET_CHARACTERS} from '../actions';
const initialState = {
    characters: [],
    charactersLoader: false
}


export const charactersReducer = (state = initialState, action: { type: string; payload: string; }) => {
    switch(action.type) {
        case GET_CHARACTERS:{
            return {
                ...state,
                charactersLoader: true
            }
        }
        case SET_CHARACTERS: {
            return {
                ...state,
                charactersLoader: false,
                characters: action.payload,
            }
        }
        default:
            return state
    }
}

export default charactersReducer
