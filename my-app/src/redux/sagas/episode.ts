import {all, fork, put, takeEvery} from "redux-saga/effects";
import {AxiosResponse} from "axios"
import { getSelectEpisode } from "../../api/api";
import { GET_EPISODE } from "redux/actionTypes";
import { getEpisodeFailed, getEpisodeSuccess } from "redux/actions/episode";


function* getEpisodeSaga(episodeId: any) {
    try {
        const response:AxiosResponse<any> = yield getSelectEpisode(episodeId.payload);
        const {data} = response
        console.log(data)
        

        yield put(getEpisodeSuccess(data));
    } catch (err) {
        yield put(getEpisodeFailed())
    }
}

export function* getEpisodeFork() {
    yield takeEvery(GET_EPISODE, getEpisodeSaga);
};

export default function* rootSaga() {
    yield all([fork(getEpisodeFork)])
};