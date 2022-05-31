import * as actionTypes from '../actionTypes'

interface typesState {
    episodeId: string,
    episodeInfo: object[],
    loader: boolean,
    error: boolean,
    message: string,
}

const initialState: typesState = {
    episodeId: '',
    episodeInfo: [],
    loader: false,
    error: false,
    message: '',
};

const EpisodeReducer = (state = initialState, action: {type: string, payload: object}) => {
    switch (action.type) {
        case actionTypes.GET_EPISODE: {
            return {
                ...state,
                episodeId: action.payload,
                loader: true,
            }
        }
        case actionTypes.GET_EPISODE_SUCCESS: {
            return {
                ...state,
                episodeInfo: action.payload,
                loader: false,
                error: false,
                message: 'Success',
            }
        }
        case actionTypes.GET_EPISODE_FAILED: {
            return {
                ...state,
                loader: false,
                error: true,
                message: "Failed"
            }
        }
        default: return state; 
    }
}

export default EpisodeReducer;