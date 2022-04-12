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
        let randomArr = []
        for (let i = 0; i < 3; i++) {
            randomArr.push(charsId[Math.floor(Math.random() * charsId.length)]); 
        }

        // let randomCharsList: AxiosResponse<any>[] = [];

        //     for (let item of randomArr) {
        //     const character:AxiosResponse<any> = await getCharacterByIdApi(item);
        //     const {data} = character

        //     randomCharsList.push(data)


        // console.log(randomCharsList);

        let randomCharsList: any = []

        for (let id of randomArr) {
            const character:AxiosResponse<any> = yield getCharacterByIdApi(id);
            const {data} = character

            randomCharsList.push(data)

            console.log(data)
        }

        // const character:AxiosResponse<any> = yield getCharacterByIdApi(1);
        // const {data} = character

        console.log(randomCharsList)
            


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