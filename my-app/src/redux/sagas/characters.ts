import {all, fork, put, takeEvery} from "redux-saga/effects";
import {AxiosResponse} from "axios"
import { getFoundCharacters } from "../../api/api";
import { GET_CHARACTERS } from "redux/actionTypes";
import { getCharactersFailed, getCharactersSuccess } from "redux/actions/characters";
import { RootStateOrAny, useSelector } from "react-redux";


function* getCharactersSaga(charName: any) {
    console.log(charName)
    try {
        const response:AxiosResponse<any> = yield getFoundCharacters(charName.payload);
        const {data: {results}} = response
        console.log(results)
        

        yield put(getCharactersSuccess(results));
    } catch (err) {
        console.log(err)
        yield put(getCharactersFailed())
    }
}

export function* getCharactersFork() {
    yield takeEvery(GET_CHARACTERS, getCharactersSaga);
};

export default function* rootSaga() {
    yield all([fork(getCharactersFork)])
};