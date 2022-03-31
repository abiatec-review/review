import { put, call, takeEvery, all } from 'redux-saga/effects';

import api from '../../services/api';

export function* fetchImages(action:any) {

  try {
    const { data } = yield call<any>(api.get, `?name=${action.payload}`);
    const {info, results} = data;
    yield put({ type: 'setImages', payload: {info, results} })
  } catch (e: any) {
    console.log(e.message)
  }

}

export function* fetchMoreImages(action:any) {

  try {
    const { data } = yield call<any>(api.get, action.payload);
    const {info, results} = data;
    yield put({ type: 'addImages', payload: {info, results} })
  } catch (e: any) {
    console.log(e.message)
  }

}

export default function* rootSaga() {
  yield all([
    takeEvery('FETCH_IMAGES', fetchImages),
    takeEvery('FETCH_MORE_IMAGES', fetchMoreImages)
  ]);
}