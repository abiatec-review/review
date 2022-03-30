import { put, call, takeEvery, delay } from 'redux-saga/effects';

import api from '../../services/api';

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

export default function* rootSaga() {
  yield takeEvery('FETCH_IMAGES', fetchImages)
}