import { apply, call, put, takeEvery } from "redux-saga/effects";
import { LOAD_HEROES, LOAD_HEROES_FAILURE, LOAD_HEROES_SUCCESS, LOAD_HEROES_LOADING } from "../../actions";

export const getHeroes = async (payload: string) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${payload}`)
  return await res.json()
}

export function* loadHeroes({payload}: any): Generator<any, any, any> {
  try {

    yield put({
      type: LOAD_HEROES_LOADING
    })

    const data = yield call(getHeroes, payload)
    yield put({
      type: LOAD_HEROES_SUCCESS,
      payload: data.results
    })

  } catch (e) {
    yield put({
      type: LOAD_HEROES_FAILURE,
    })
  }
}

export default function* findHeroSaga() {
  yield takeEvery(LOAD_HEROES, loadHeroes)
}