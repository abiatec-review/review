import { call, put, takeEvery } from "redux-saga/effects";

import { LOAD_HEROES, LOAD_HEROES_FAILURE, LOAD_HEROES_SUCCESS, LOAD_HEROES_LOADING, LOAD_MORE_HEROES, LOAD_MORE_HEROES_SUCCESS } from "../../actions/heroActions";
import { getHeroes } from "./api";

export function* loadMoreHeroes({payload}: any): Generator<any, any, any> {
  try {
    const data = yield call(getHeroes, payload.name, payload.page)
    yield put({
      type: LOAD_MORE_HEROES_SUCCESS,
      payload: data
    })

  } catch (e) {
    
  }
}

export function* loadHeroes({payload}: any): Generator<any, any, any> {
  try {
    yield put({
      type: LOAD_HEROES_LOADING
    })
    const data = yield call(getHeroes, payload.name, payload.page)
    yield put({
      type: LOAD_HEROES_SUCCESS,
      payload: data
    })

  } catch (e) {
    yield put({
      type: LOAD_HEROES_FAILURE,
    })
  }
}

export default function* findHeroSaga() {
  yield takeEvery(LOAD_HEROES, loadHeroes)
  yield takeEvery(LOAD_MORE_HEROES, loadMoreHeroes)
}