export const GET_CHARACTERS = 'GET_CHARACTERS';
export const SET_CHARACTERS = 'SET_CHARACTERS';
export const GET_EPISODES = 'GET_EPISODES';
export const SET_EPISODES = 'SET_EPISODES';
export const GET_EPISODES_CHARACTER = 'GET_EPISODES_CHARACTER';
export const SET_EPISODES_CHARACTER = 'SET_EPISODES_CHARACTER';
export const DELETE_EPISODES_CHARACTER = 'DELETE_EPISODES_CHARACTER';

// @ts-ignore
export const getCharacters = (payload) => {
    return {
        type: GET_CHARACTERS,
        payload
    }
}
// @ts-ignore
export const setCharacters = (payload) => {
    return {
        type: SET_CHARACTERS,
        payload
    }
}
// @ts-ignore
export const getEpisodes = (payload) => {
    return {
        type: GET_EPISODES,
        payload
    }
}
// @ts-ignore
export const setEpisodes = (payload) => {
    return {
        type: SET_EPISODES,
        payload
    }
}
// @ts-ignore
export const getEpisodesCharacter = (payload) => {
    return {
        type: GET_EPISODES_CHARACTER,
        payload
    }
}
// @ts-ignore
export const setEpisodesCharacter = (payload) => {
    return {
        type: SET_EPISODES_CHARACTER,
        payload
    }
}
// @ts-ignore
export const deleteEpisodesCharacter = () => {
    return {
        type: DELETE_EPISODES_CHARACTER,
    }
}


