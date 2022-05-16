import {
    GET_CHARACTERS_FAILED,
    GET_CHARACTERS,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTER_BY_ID,
    GET_CHARACTER_BY_ID_SUCCESS,
    GET_CHARACTER_BY_ID_FAILED,
    GET_CHARACTERS_PAGES_INFO,
    GET_CHARACTERS_BY_PAGE_SUCCESS,
    GET_CHARACTERS_BY_PAGE_AND_NAME, CLEAR_CHARACTERS
} from "redux/actionTypes";

export const getCharacters = (char: string) => {
    return {
        type: GET_CHARACTERS,
        payload: char
    };
};

export const getCharactersByPageAndName = (payload: object) => {
    return {
        type: GET_CHARACTERS_BY_PAGE_AND_NAME,
        payload
    }
}

export const getCharactersByPageSuccess = (chars: number) => {
    return {
        type: GET_CHARACTERS_BY_PAGE_SUCCESS,
        payload: chars
    };
};

export const getCharactersSuccess = (chars: object) => {
    return {
        type: GET_CHARACTERS_SUCCESS,
        payload: chars
    };
};

export const getCharactersFailed = () => {
    return {
        type: GET_CHARACTERS_FAILED
    }
}

export const getCharacterById = (id: string) => {
    return {
        type: GET_CHARACTER_BY_ID,
        payload: id
    }
}

export const getCharacterByIdSuccess = (charById: string) => {
    return {
        type: GET_CHARACTER_BY_ID_SUCCESS,
        payload: charById
    }
}

export const getCharacterByIdFailed = () => {
    return {
        type: GET_CHARACTER_BY_ID_FAILED
    }
}

export const getCharactersPageInfo = (info: object) => {
    return {
        type: GET_CHARACTERS_PAGES_INFO,
        payload: info
    }
}

export const clearCharacters = () => {
    return {
        type: CLEAR_CHARACTERS
    }
}