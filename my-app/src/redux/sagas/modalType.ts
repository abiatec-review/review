import { put, takeEvery, fork, all } from "redux-saga/effects";
import { setCharacter, setEpisode } from "redux/actions/modalType";
import { SET_CHARACTER, SET_EPISODE } from "redux/actionTypes";

function* setTypeCharacterSaga(modalType: any) {
    put(setCharacter(modalType))
}

function* setTypeEpisodeSaga(modalType: any) {
    put(setEpisode(modalType))
}

export function* setTypeCharacterFork() {
    yield takeEvery(SET_CHARACTER, setTypeCharacterSaga);
};

export function* setTypeEpisodeFork() {
    yield takeEvery(SET_EPISODE, setTypeEpisodeSaga)

};

export default function* rootSaga() {
    yield all([
        fork(setTypeCharacterFork),
        fork(setTypeEpisodeFork),
    ])
};