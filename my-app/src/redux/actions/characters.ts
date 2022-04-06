import { GET_FIND_CHARACTERS, GET_FIND_CHARACTERS_SUCCESS } from "redux/actionTypes";

export const getCharacters = (payload: any) => {
    return {
        type: GET_FIND_CHARACTERS,
        payload
    };
};

export const getCharactersSuccess = (payload: any) => {
    return {
        type: GET_FIND_CHARACTERS_SUCCESS,
        payload
    };
};