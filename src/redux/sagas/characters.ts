import {AxiosResponse} from 'axios';
import {all, fork, put, takeEvery} from 'redux-saga/effects';
import {services} from '../../api/api';
import {Characters} from '../../types/types';
import {actionsTypes} from '../actions/actionsType';
import {getCharaters} from '../actions/characters';

function* getAllCharactersSaga() {
  try {
    let allCharactersGetResult: AxiosResponse<Characters[]> =
      yield services.getCharacters();
    console.log(3, allCharactersGetResult);
    yield put(getCharaters(allCharactersGetResult));
  } catch (err) {
    console.log(err);
  }
}

function* getAllCharactersFork() {
  yield takeEvery(actionsTypes.GET_CHARACTERS_SUCSESS, getAllCharactersSaga);
}

export default function* rootSaga() {
  yield all([fork(getAllCharactersFork)]);
}
