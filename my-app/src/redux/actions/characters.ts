import { GET_CHARACTERS_FAILED, GET_CHARACTERS, GET_CHARACTERS_SUCCESS } from "redux/actionTypes";

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