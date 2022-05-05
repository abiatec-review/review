import {all, fork, put, takeEvery} from "redux-saga/effects";
import {logInWithEmailAndPassword, logout, registerWithEmailAndPassword} from "../../utils/firebase";
import {signInFailed, signInSuccess, signOut, signUpFailed, signUpSuccess} from "../actions/auth";
import {SIGN_IN_WITH_EMAIL_AND_PASSWORD, SIGN_OUT, SIGN_UP} from "../actionTypes";
import exp from "constants";


function* signUpSaga({payload}: any): Generator<any, any, any> {
    try {

        const data = yield registerWithEmailAndPassword(payload.email, payload.password);

        yield put(signUpSuccess(data.user))
    } catch (err) {
        yield put(signUpFailed())
    }
}

function* signInSaga({payload}: any): Generator<any, any, any> {
    try {

        const data = yield logInWithEmailAndPassword(payload.email, payload.password);

        yield put(signInSuccess(data))
    } catch (err) {
        yield put(signInFailed())
    }
}

function* signOutSaga() {
    try {
        yield logout();
        // yield put(signOut())
    } catch (err) {
        console.log(err)
    }
}

export function* signUpFork() {
    yield takeEvery(SIGN_UP, signUpSaga);
};

export  function* signInFork() {
    yield takeEvery(SIGN_IN_WITH_EMAIL_AND_PASSWORD, signInSaga);
}

export  function* signOutFork() {
    yield takeEvery(SIGN_OUT, signOutSaga);
}

export default function* rootSaga() {
    yield all ([
        fork(signUpFork),
        fork(signInFork),
        fork(signOutFork)
    ])
}