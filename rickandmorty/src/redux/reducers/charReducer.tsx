//@ts-ignore
import {GET_CHARACTERS, SET_CHARACTERS} from '../actions';
const initialState = {
    characters: [],
    charactersLoader: false
}

//@ts-ignore
export const charactersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CHARACTERS:{
            return {
                ...state,
                charactersLoader: true
            }
        }
        case SET_CHARACTERS: {
            console.log(action)
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
