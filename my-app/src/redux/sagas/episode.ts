import {all, fork, put, takeEvery} from "redux-saga/effects";
import {AxiosResponse} from "axios"
import { episodesService } from "src/services/axios/endpoints/episodes";
import { charactersService } from "src/services/axios/endpoints/charecters";

import { GET_EPISODE } from "src/redux/actionTypes";
import { getEpisodeFailed, getEpisodeSuccess } from "src/redux/actions/episode";
import { selectEpisode } from "src/utils/helpers";


function* getEpisodeSaga(episodeId: any) {
    const { payload } = episodeId
    try {
        const response:AxiosResponse = yield episodesService.getSelectEpisode(payload);
        const {data: {id, name, air_date, episode, url, created, characters}} = response
        
        const charsId = characters.map((url: string) => {
            return selectEpisode(url)
        })
        let randomArr: number[] = []
        while(randomArr.length <= 2) {
            let choosenId = charsId[Math.floor(Math.random() * charsId.length)];
            if(!randomArr.includes(choosenId)) {
                randomArr.push(choosenId)
            }
        }



        const randomCharsList:AxiosResponse = yield charactersService.getThreeRandomChars(randomArr);
           
        yield put(getEpisodeSuccess({id, name, air_date, episode, url, created, randomCharsList}));

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
