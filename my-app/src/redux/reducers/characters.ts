import { GET_CHARACTERS, GET_CHARACTERS_SUCCESS, GET_CHARACTERS_FAILED, GET_CHARACTER_BY_ID, GET_CHARACTER_BY_ID_SUCCESS, GET_CHARACTER_BY_ID_FAILED, GET_CHARACTERS_PAGES_INFO, GET_CHARACTERS_PAGE } from '../actionTypes' 

const initialState = {
    charName: '',
    charId: '',
    characterById: [],
    charactersList: [],
    loader: false,
    error: false,
    pagesInfo: ''
    
};

const CharactersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_CHARACTERS: {
            return {
                ...state,
                charName: action.payload,
                loader: true
            }
        }
        case GET_CHARACTERS_SUCCESS: {
            return {
                ...state,
                charactersList: action.payload,
                loader: false,
                error: false
            }
        }
        case GET_CHARACTERS_FAILED: {
            return {
                ...state,
                loader: false,
                error: true
            }
        }
        case GET_CHARACTER_BY_ID: {
            return {
                ...state,
                charId: action.payload,
                loader: true,
                error: false
            }
        }
        case GET_CHARACTER_BY_ID_SUCCESS: {
            return {
                ...state,
                characterById: action.payload,
                loader: false,
                error: false
            }
        }
        case GET_CHARACTER_BY_ID_FAILED: {
            return {
                ...state,
                loader: false,
                error: true
            }
        }
        case GET_CHARACTERS_PAGES_INFO: {
            return {
                ...state,
                pagesInfo: action.payload
            }
        }
        default: return state; 
    }
}

export default CharactersReducer;