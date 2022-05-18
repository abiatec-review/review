import {TCharacter} from "models";
import {Characters, LoaderError, Sort} from "../actions";

const initialState = {
  characters: [],
  charactersLoader: false,
  error: false,
  page: 1,
  info: {},
}

export const charactersReducer = (state = initialState, action: { type: string; payload: {results: TCharacter<string>; info: {next: string}}; }) => {

  switch(action.type) {
    case Characters.SET_CHARACTERS: {
      return {
        ...state,
        characters: action.payload.results,
        page: state.page + 1,
        info: action.payload.info.next,
      }
    }
    case Characters.DELETE_CHARACTERS: {
      return {
        ...state,
        charactersLoader: false,
        characters: [],
        page: 1,
        info: {}
      }
    }
    case LoaderError.SET_LOADER: {
      return {
        ...state,
        charactersLoader: action.payload
      }
    }
    case LoaderError.SET_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }
    case Sort.SORT_CHARACTERSID: {
      return {
        ...state,
        characters: state.characters.sort((a: TCharacter<string>, b: TCharacter<string>) => a.id - b.id)
      }
    }
    case Sort.SORT_CHARACTERSNAME: {
      return {
        ...state,
        characters: state.characters.sort((a: TCharacter<string>, b: TCharacter<string>) => a.name.localeCompare(b.name))
      }
    }
    case Sort.SORT_CHARACTERSLOCATION: {
      return {
        ...state,
        characters: state.characters.sort((a: TCharacter<string>, b: TCharacter<string>) => a.location.name.localeCompare(b.location.name))
      }
    }
    case Sort.SORT_CHARACTERSNAMELOCATION: {
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
