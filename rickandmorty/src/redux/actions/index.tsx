export const GET_CHARACTERS = 'GET_CHARACTERS';
export const SET_CHARACTERS = 'SET_CHARACTERS';

// @ts-ignore
export const getCharacters = (payload) => {
    return {
        type: GET_CHARACTERS,
        payload
    }
}
// @ts-ignore
export const setCharacters = (payload) => {
    // debugger
    return {
        type: SET_CHARACTERS,
        payload
    }
}

