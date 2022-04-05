import { put, call, takeEvery, all } from 'redux-saga/effects';
import { ActionType } from 'redux/actions/actionType';
import { setPictures, resetPictures } from 'redux/actions/pictures';
import { setInfo, resetInfo } from 'redux/actions/info';
import { ActionType as Action } from 'types';
import api from 'services/api';

export function* fetchPictures(action: Action) {

  try {
    const { data } = yield call(api.get, `?name=${action.payload}`);
    const { info, results } = data;

    yield all([
      put(setPictures(results)),
      put(setInfo(info))
    ]);



  } catch {
    yield all([
      put(resetPictures()),
      put(resetInfo())
    ]);
  }

}

export function* fetchMorePictures(action: Action) {

  try {
    const { data } = yield call(api.get, action.payload);
    const { info, results } = data;
    yield all([
      put({ type: ActionType.SetPictures, payload: results }),
      put({ type: ActionType.SetPicturesInfo, payload: info })
    ]);
  } catch {
    yield put({ type: ActionType.ResetPictures });
  }

}

export default function* rootSaga() {
  yield all([
    takeEvery(ActionType.FetchPictures, fetchPictures),
    takeEvery(ActionType.FetchMore, fetchMorePictures)
  ]);
}