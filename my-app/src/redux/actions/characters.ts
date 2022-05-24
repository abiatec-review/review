import * as actionTypes from "redux/actionTypes";

export const getCharacters = (char: string) => {
    return {
        type: actionTypes.GET_CHARACTERS,
        payload: char
    };
};

export const getCharactersByPageAndName = (payload: object) => {
    return {
        type: actionTypes.GET_CHARACTERS_BY_PAGE_AND_NAME,
        payload
    }
}

export const getCharactersByPageSuccess = (chars: number) => {
    return {
        type: actionTypes.GET_CHARACTERS_BY_PAGE_SUCCESS,
        payload: chars
    };
};

export const getCharactersSuccess = (chars: object) => {
    return {
        type: actionTypes.GET_CHARACTERS_SUCCESS,
        payload: chars
    };
};

export const getCharactersFailed = () => {
    return {
        type: actionTypes.GET_CHARACTERS_FAILED
    }
}

export const getCharacterById = (id: string) => {
    return {
        type: actionTypes.GET_CHARACTER_BY_ID,
        payload: id
    }
}

export const getCharacterByIdSuccess = (charById: string) => {
    return {
        type: actionTypes.GET_CHARACTER_BY_ID_SUCCESS,
        payload: charById
    }
}

export const getCharacterByIdFailed = () => {
    return {
        type: actionTypes.GET_CHARACTER_BY_ID_FAILED
    }
}

export const getCharactersPageInfo = (info: object) => {
    return {
        type: actionTypes.GET_CHARACTERS_PAGES_INFO,
        payload: info
    }
}

export const clearCharacters = () => {
    return {
        type: actionTypes.CLEAR_CHARACTERS
    }
}