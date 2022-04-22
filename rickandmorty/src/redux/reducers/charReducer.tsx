import {GET_CHARACTERS, SET_CHARACTERS} from '../actions';
const initialState = {
    characters: [],
    charactersLoader: false,
    page: 1,
    info: {}
}


export const charactersReducer = (state = initialState, action: { type: string; payload: {}; }) => {
    console.log(action.payload)
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
                characters: action.payload.results,
                page: state.page + 1,
                info: action.payload.info.next
            }
        }
        default:
            return state
    }
}

export default charactersReducer
