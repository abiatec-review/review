import {
    SET_CHARACTERS,
    DELETE_CHARACTERS,
    SET_ERROR,
    SET_LOADER,
    SORT_CHARACTERSNAME, SORT_CHARACTERSID, SORT_CHARACTERSLOCATION, SORT_CHARACTERSNAMELOCATION
} from '../actions';

import {TCharacter} from "../../models/character";

const initialState = {
    characters: [],
    charactersLoader: false,
    error: false,
    page: 1,
    info: {},
}

export const charactersReducer = (state = initialState, action: { type: string; payload: {results: TCharacter<string>; info: {next: string}}; }) => {

    switch(action.type) {
        case SET_CHARACTERS: {
            return {
                ...state,
                characters: action.payload.results,
                page: state.page + 1,
                info: action.payload.info.next,
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
        case SORT_CHARACTERSID: {
            return {
                ...state,
                characters: state.characters.sort((a: TCharacter<string>, b: TCharacter<string>) => a.id - b.id)
            }
        }
        case SORT_CHARACTERSNAME: {
            return {
                ...state,
                characters: state.characters.sort((a: TCharacter<string>, b: TCharacter<string>) => a.name.localeCompare(b.name))
            }
        }
        case SORT_CHARACTERSLOCATION: {
            return {
                ...state,
                characters: state.characters.sort((a: TCharacter<string>, b: TCharacter<string>) => a.location.name.localeCompare(b.location.name))
            }
        }
        case SORT_CHARACTERSNAMELOCATION: {
            return {
                ...state,
                characters: state.characters.sort((a: TCharacter<string>, b: TCharacter<string>) => a.name.localeCompare(b.name))
                    .sort((a: TCharacter<string>, b: TCharacter<string>) => a.location.name.localeCompare(b.location.name))
            }
        }
        default:
            return state
    }
}

export default charactersReducer
