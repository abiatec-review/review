import {DELETE_CHARACTERS, SET_CHARACTERS, SET_ERROR, SET_LOADER} from '../actions';
import {TCharacter} from "../../models/character";
const initialState = {
    characters: [],
    charactersLoader: false,
    error: false,
    page: 1,
    info: {}
}

export const charactersReducer = (state = initialState, action: { type: string; payload: {results: TCharacter<string>; info: {next: string}}; }) => {

    switch(action.type) {
        case SET_CHARACTERS: {
            return {
                ...state,
                characters: action.payload.results,
                page: state.page + 1,
                info: action.payload.info.next
            }
        }
        case DELETE_CHARACTERS: {
            return {
                ...state,
                charactersLoader: false,
                characters: [],
                page: 1,
                info: {}
            }
        }
        case SET_LOADER: {
            return {
                ...state,
                charactersLoader: action.payload
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}

export default charactersReducer
