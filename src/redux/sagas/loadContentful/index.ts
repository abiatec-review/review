import { call, put, takeEvery } from "redux-saga/effects";
import { LOAD_CONTENTFUL, LOAD_CONTENTFUL_SUCCESS } from "../../actions/ContentfulActions";
import { getContentful } from "./api";


export function* loadContentfulWatcher(): Generator<any, any, any> {
  try {

    // yield put({
    //   type: LOAD_HEROES_LOADING
    // })
    const contenfulInfo = yield call(getContentful)
    // console.log(contenfulInfo)
    yield put({
      type: LOAD_CONTENTFUL_SUCCESS,
      payload: JSON.parse(JSON.stringify(contenfulInfo))
    })

   
  } catch (e) {
    // yield put({
    //   type: LOAD_HEROES_FAILURE,
    // })
  }
}

export default function* loadContentfulSaga() {
  yield takeEvery(LOAD_CONTENTFUL, loadContentfulWatcher)
}