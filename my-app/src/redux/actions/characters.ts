import { GET_CHARACTERS_FAILED, GET_CHARACTERS, GET_CHARACTERS_SUCCESS, GET_CHARACTER_BY_ID, GET_CHARACTER_BY_ID_SUCCESS, GET_CHARACTER_BY_ID_FAILED } from "redux/actionTypes";

export const getCharacters = (char: string) => {
    return {
        type: GET_CHARACTERS,
        payload: char
    };
};

export const getCharactersSuccess = (chars: any) => {
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

export const getCharacterById = (id: any) => {
    return {
        type: GET_CHARACTER_BY_ID,
        payload: id
    }
}

export const getCharacterByIdSuccess = (charById: any) => {
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