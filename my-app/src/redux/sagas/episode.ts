import {all, fork, put, takeEvery} from "redux-saga/effects";
import {AxiosResponse} from "axios"
import { getCharacterByIdApi, getSelectEpisode } from "../../api/api";
import { GET_EPISODE } from "redux/actionTypes";
import { getEpisodeFailed, getEpisodeSuccess } from "redux/actions/episode";


function* getEpisodeSaga(episodeId: any) {
    try {
        const response:AxiosResponse<any> = yield getSelectEpisode(episodeId.payload);
        const {data: {id, name, air_date, episode, url, created, characters}} = response
        
        const charsId = characters.map((url: string) => {
            return Number(url.split('/').slice(-1))
        })
        let randomArr: any = []
        while(randomArr.length <= 2) {
            let choosenId = charsId[Math.floor(Math.random() * charsId.length)];
            if(!randomArr.includes(choosenId)) {
                randomArr.push(choosenId)
            }
        }

        let randomCharsList: any = []

        // Promise.all(randomArr.map(async (elem: any) => {
        //     const character:any = await getCharacterByIdApi(elem);
        //     return await  randomCharsList.push(character.data) 
        //   })) 

        for (let id of randomArr) {
            const character:AxiosResponse<any> = yield getCharacterByIdApi(id);
            const {data} = character

            randomCharsList.push(data)
        }
            
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
