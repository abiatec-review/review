import {AxiosResponse} from 'axios';
import {all, fork, put, takeEvery} from 'redux-saga/effects';
import {services} from '../../api/api';
import {allDataInfo} from '../../types/types';
import {actionsTypes} from '../actions/actionsType';
import {getCharaters, getNextCharaters} from '../actions/characters';

function* getAllCharactersSaga() {
  try {
    const allCharactersGetResult: AxiosResponse<allDataInfo> =
      yield services.getCharacters();
    yield put(getCharaters(allCharactersGetResult));
  } catch (err) {
    console.log(err);
  }
}

function* getNextAllCharactersSaga(payload: any) {
  try {
    const nexstCharacters: AxiosResponse<allDataInfo> =
      yield services.getNextCharacters(payload.payload.nextCharactersPage);
    yield put(getNextCharaters(nexstCharacters));
  } catch (err) {
    console.log(err);
  }
}

function* getAllCharactersFork() {
  yield takeEvery(actionsTypes.GET_CHARACTERS_SUCSESS, getAllCharactersSaga);
}

function* getNextCharactersFork() {
  yield takeEvery(
    actionsTypes.GET_NEXT_CHARACTERS_SUCSESS,
    getNextAllCharactersSaga,
  );
}

export default function* rootSaga() {
  yield all([fork(getAllCharactersFork), fork(getNextCharactersFork)]);
}
