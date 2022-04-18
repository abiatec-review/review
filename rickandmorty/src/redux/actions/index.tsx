export const GET_CHARACTERS = 'GET_CHARACTERS';
export const SET_CHARACTERS = 'SET_CHARACTERS';
export const GET_EPISODES = 'GET_EPISODES';
export const SET_EPISODES = 'SET_EPISODES';
export const GET_EPISODES_CHARACTER = 'GET_EPISODES_CHARACTER';
export const SET_EPISODES_CHARACTER = 'SET_EPISODES_CHARACTER';
export const DELETE_EPISODES_CHARACTER = 'DELETE_EPISODES_CHARACTER';


export const getCharacters = (payload: {characterName: string}) => {
    return {
        type: GET_CHARACTERS,
        payload
    }
}

export const setCharacters = (payload: string) => {
    return {
        type: SET_CHARACTERS,
        payload
    }
}

export const getEpisodes = (payload: {episodeName: string}) => {
    return {
        type: GET_EPISODES,
        payload
    }
}

export const setEpisodes = (payload: string) => {
    return {
        type: SET_EPISODES,
        payload
    }
}

export const setEpisodesCharacter = (payload: string) => {
    return {
        type: SET_EPISODES_CHARACTER,
        payload
    }
}

export const deleteEpisodesCharacter = () => {
    return {
        type: DELETE_EPISODES_CHARACTER,
    }
}


