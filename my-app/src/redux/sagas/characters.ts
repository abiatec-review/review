import {all, fork, put, takeEvery} from "redux-saga/effects";
import {AxiosResponse} from "axios"
import {charactersService} from "src/services/axios/endpoints/charecters";
import * as actionTypes from "src/redux/actionTypes";
import { getCharacterByIdFailed,
         getCharacterByIdSuccess,
         getCharactersByPageSuccess,
         getCharactersFailed,
         getCharactersPageInfo,
         getCharactersSuccess } from "src/redux/actions/characters";

const { getFoundCharacters, getCharacterByIdApi, getCharactersByPageApi, getCharactersByPageAndNameApi } = charactersService


function* getCharactersSaga(charName: any) {
    try {
        const response:AxiosResponse = yield getFoundCharacters(charName.payload);
        const {data: {results, info}} = response;

        yield put(getCharactersSuccess(results));
        yield put(getCharactersPageInfo(info))
    } catch (err) {
        console.log(err)
        yield put(getCharactersFailed())
    }
}

function* getCharacterByIdSaga(id: any) {
    try {
        const response:AxiosResponse = yield getCharacterByIdApi(id.payload);
        const {data} = response;

        yield put(getCharacterByIdSuccess(data));
    } catch (err) {
        console.log(err)
        yield put(getCharacterByIdFailed())
    }
}

function* getCharactersByPageSaga(url: any) {
    try {
        const response:AxiosResponse = yield getCharactersByPageApi(url.payload);
        const {data: {results, info}} = response;

        yield put(getCharactersByPageSuccess(results));
        yield put(getCharactersPageInfo(info));
    } catch (err) {
        console.log(err)
        yield put(getCharactersFailed())
    }
}

function* getCharactersByPageAndNameSaga(payload: any) {
    try {
        const response:AxiosResponse = yield getCharactersByPageAndNameApi(payload.payload.name, payload.payload.page)
        const {data:{results, info}} = response

        yield put(getCharactersByPageSuccess(results));
        yield put(getCharactersPageInfo(info));
    } catch (err) {
        console.log(err)
        yield put(getCharactersFailed())
    }
}

export function* getCharactersFork() {
    yield takeEvery(actionTypes.GET_CHARACTERS, getCharactersSaga);
};

export function* getCharacterByIdFork() {
    yield takeEvery(actionTypes.GET_CHARACTER_BY_ID, getCharacterByIdSaga)
};

export function* getCharactersByPageFork() {
    yield takeEvery(actionTypes.GET_CHARACTERS_BY_PAGE, getCharactersByPageSaga)
}

export function* getCharactersByPageAndNameFork() {
    yield takeEvery(actionTypes.GET_CHARACTERS_BY_PAGE_AND_NAME, getCharactersByPageAndNameSaga)
}

export default function* rootSaga() {
    yield all([
        fork(getCharactersFork),
        fork(getCharacterByIdFork),
        fork(getCharactersByPageFork),
        fork(getCharactersByPageAndNameFork)
    ])
};
