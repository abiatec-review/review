import {all, fork, put, takeEvery} from "redux-saga/effects";
import {AxiosResponse} from "axios"
import { getFoundCharacters } from "../../api/api";
import { GET_FIND_CHARACTERS, GET_FIND_CHARACTERS_SUCCESS } from "redux/actionTypes";


function* getCharactersSaga(payload: any) {
    try {
        const response:AxiosResponse<any> = yield getFoundCharacters(payload.payload);
        const {data: {results}} = response
        console.log(results)

        yield put({type: GET_FIND_CHARACTERS_SUCCESS, payload: results});
    } catch (err) {
    console.log(err)
    }
}

export function* getCharactersFork() {
    yield takeEvery(GET_FIND_CHARACTERS, getCharactersSaga);
};

export default function* rootSaga() {
    yield all([fork(getCharactersFork)])
};