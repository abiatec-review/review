import { GET_FIND_CHARACTERS, GET_FIND_CHARACTERS_SUCCESS } from '../actionTypes' 

const initialState = {
    findCharactersList: [],
    listLoaderStatus: false,
    
};

const CharactersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_FIND_CHARACTERS: {
            return {
                ...state,
                listLoaderStatus: true
            }
        }
        case GET_FIND_CHARACTERS_SUCCESS: {
            console.log(action.payload)
            return {
                ...state,
                findCharactersList: {...action.payload},
                listLoaderStatus: false
            }
        }
        default: return state; 
    }
}

export default CharactersReducer;