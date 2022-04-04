import { call, put, takeEvery } from "redux-saga/effects";
import { LOAD_CONTENTFUL, LOAD_CONTENTFUL_SUCCESS } from "redux/actions/ContentfulActions";
import { getContentful } from "./api";


export function* loadContentfulWatcher(): Generator<any, any, any> {
  try {
    const contenfulInfo = yield call(getContentful)
    yield put({
      type: LOAD_CONTENTFUL_SUCCESS,
      payload: JSON.parse(JSON.stringify(contenfulInfo))
    })
   
  } catch (e) {
    console.log(e)
  }
}

export default function* loadContentfulSaga() {
  
  yield takeEvery(LOAD_CONTENTFUL, loadContentfulWatcher)
}