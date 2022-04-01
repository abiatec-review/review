import { all } from "redux-saga/effects";
import charactrs from "./characters"


export default function* rootSaga(getState: any) {
    yield all([
        charactrs()
    ]);
}