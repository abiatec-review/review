import { AxiosResponse } from 'axios';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { services } from '../../api/api';
import { allDataInfo } from '../../types/types';
import { CharactersActionTypes } from '../actions/characters/action-types';
import { getCharaters, getNextCharaters } from '../actions/characters/actions';

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

    console.log(payload);
    yield put(getNextCharaters(nexstCharacters));
  } catch (err) {
    console.log(err);
  }
}

function* getAllCharactersFork() {
  yield takeEvery(
    CharactersActionTypes.GET_CHARACTERS_SUCCESS,
    getAllCharactersSaga,
  );
}

function* getNextCharactersFork() {
  yield takeEvery(
    CharactersActionTypes.GET_NEXT_CHARACTERS_SUCCESS,
    getNextAllCharactersSaga,
  );
}

export default function* rootSaga() {
  yield all([fork(getAllCharactersFork), fork(getNextCharactersFork)]);
}
