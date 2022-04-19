import { GET_EPISODE, GET_EPISODE_FAILED, GET_EPISODE_SUCCESS } from "redux/actionTypes";

export const getEpisode = (episodeId: number) => {
    return {
        type: GET_EPISODE,
        payload: episodeId
    };
};

export const getEpisodeSuccess = (episodeInfo: any) => {
    return {
        type: GET_EPISODE_SUCCESS,
        payload: episodeInfo
    };
};

export const getEpisodeFailed = () => {
    return {
        type: GET_EPISODE_FAILED
    }
}