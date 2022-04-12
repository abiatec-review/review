import { GET_EPISODE, GET_EPISODE_FAILED, GET_EPISODE_SUCCESS } from '../actionTypes' 

const initialState = {
    episodeId: '',
    episodeInfo: [],
    loader: false,
    error: false,
    message: ''
    
};

const EpisodeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_EPISODE: {
            return {
                ...state,
                episodeId: action.payload,
                loader: true
            }
        }
        case GET_EPISODE_SUCCESS: {
            return {
                ...state,
                episodeInfo: action.payload,
                loader: false,
                error: false,
                message: 'Success'
            }
        }
        case GET_EPISODE_FAILED: {
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