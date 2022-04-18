import {all, fork, put, takeEvery} from "redux-saga/effects";
import {AxiosResponse} from "axios"
import { getFoundCharacters, getCharacterByIdApi, getCharactersByPageApi, getCharactersByPageAndNameApi } from "../../api/api";
import { GET_CHARACTERS, GET_CHARACTERS_BY_PAGE, GET_CHARACTERS_BY_PAGE_AND_NAME, GET_CHARACTER_BY_ID } from "redux/actionTypes";
import { getCharacterByIdFailed, 
         getCharacterByIdSuccess, 
         getCharactersByPageSuccess, 
         getCharactersFailed, 
         getCharactersPageInfo, 
         getCharactersSuccess } from "redux/actions/characters";


function* getCharactersSaga(charName: any) {
    try {
        const response:AxiosResponse<any> = yield getFoundCharacters(charName.payload);
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
        const response:AxiosResponse<any> = yield getCharacterByIdApi(id.payload);
        const {data} = response;

        yield put(getCharacterByIdSuccess(data));
    } catch (err) {
        console.log(err)
        yield put(getCharacterByIdFailed())
    }
}

function* getCharactersByPageSaga(url: any) {
    try {
        const response:AxiosResponse<any> = yield getCharactersByPageApi(url.payload);
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
        const response:AxiosResponse<any> = yield getCharactersByPageAndNameApi(payload.payload.name, payload.payload.page)
        const {data:{results, info}} = response

        yield put(getCharactersByPageSuccess(results));
        yield put(getCharactersPageInfo(info));
    } catch (err) {
        console.log(err)
        yield put(getCharactersFailed())
    }
}

export function* getCharactersFork() {
    yield takeEvery(GET_CHARACTERS, getCharactersSaga);
};

export function* getCharacterByIdFork() {
    yield takeEvery(GET_CHARACTER_BY_ID, getCharacterByIdSaga)
};

export function* getCharactersByPageFork() {
    yield takeEvery(GET_CHARACTERS_BY_PAGE, getCharactersByPageSaga)
}

export function* getCharactersByPageAndNameFork() {
    yield takeEvery(GET_CHARACTERS_BY_PAGE_AND_NAME, getCharactersByPageAndNameSaga)
}

export default function* rootSaga() {
    yield all([
        fork(getCharactersFork),
        fork(getCharacterByIdFork),
        fork(getCharactersByPageFork),
        fork(getCharactersByPageAndNameFork)
    ])
};
