import { put, call, takeEvery, all } from 'redux-saga/effects';

import api from '../../services/api';
import axios from 'axios';

export function* fetchImages(action:any) {
  // yield delay(1000);

  try {
    const { data } = yield call<any>(api.get, `?name=${action.payload}`);
    const {info, results} = data;
    yield put({ type: 'setImages', payload: {info, results} })
  } catch (e: any) {
    console.log(e.message)
  }

  // yield put({ type: 'setImages' , payload: 'dfvdfvdfv'});
}

export function* fetchMoreImages(action:any) {
  // yield delay(1000);

  try {
    const { data } = yield call<any>(axios.get, action.payload);
    const {info, results} = data;
    yield put({ type: 'addImages', payload: {info, results} })
  } catch (e: any) {
    console.log(e.message)
  }

  // yield put({ type: 'setImages' , payload: 'dfvdfvdfv'});
}

export default function* rootSaga() {
  yield all([
    takeEvery('FETCH_IMAGES', fetchImages),
    takeEvery('FETCH_MORE_IMAGES', fetchMoreImages)
  ]);
}