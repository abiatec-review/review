import * as actionTypes from "src/redux/actionTypes";

export const getEpisode = (episodeId: number) => {
    return {
        type: actionTypes.GET_EPISODE,
        payload: episodeId
    };
};

export const getEpisodeSuccess = (episodeInfo: object) => {
    return {
        type: actionTypes.GET_EPISODE_SUCCESS,
        payload: episodeInfo
    };
};

export const getEpisodeFailed = () => {
    return {
        type: actionTypes.GET_EPISODE_FAILED
    }
}