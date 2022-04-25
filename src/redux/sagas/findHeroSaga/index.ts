import { call, put, takeEvery } from "redux-saga/effects";

import { LOAD_HEROES, LOAD_HEROES_FAILURE, LOAD_HEROES_SUCCESS, LOAD_HEROES_LOADING, LOAD_MORE_HEROES, LOAD_MORE_HEROES_SUCCESS } from "redux/actions/heroActions";
import { getHeroes, IPayloadArguments } from "./api";

interface IPayload {
  payload: IPayloadArguments
}

export function* loadMoreHeroes({payload: {name, page}}: IPayload): Generator<any, any, any> {
  try {
    const data = yield call(getHeroes, {name, page})
    yield put({
      type: LOAD_MORE_HEROES_SUCCESS,
      payload: data
    })

  } catch (e) {
    console.log(e)
  }
}

export function* loadHeroes({payload: {name, page}}: IPayload): Generator<any, any, any> {
  try {
    yield put({
      type: LOAD_HEROES_LOADING
    })

    const data = yield call(getHeroes, {name, page});
    
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