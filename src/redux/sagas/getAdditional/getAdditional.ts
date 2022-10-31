// import {AxiosResponse} from 'axios';
import {all, fork, put, takeEvery} from 'redux-saga/effects';
import {actionsTypes} from '../../actions/actionsType';
import {apiHelper} from '../../../api/api';
import {Characters, Episodes} from '../../../types/types';
import {
  setCharactersFromLocation,
  setEpisodeCharacters,
} from '../../actions/getAdditional';
import {helper} from './helper';

function* getAdditionalDataFromUrl({payload}: any) {
  try {
    // @ts-ignore
    const data = yield apiHelper(payload);
    if (data.characters) {
      const charactersFromEpisode: Characters[] = yield apiHelper(
        `https://rickandmortyapi.com/api/character/${helper.getCharactersIdFromUrl(
          data.characters,
        )}`,
      );
      yield put(
        setEpisodeCharacters({
          charactersFromEpisode,
        }),
      );
    }
    if (data.residents) {
      const charactersFromLocation: Characters[] = yield apiHelper(
        `https://rickandmortyapi.com/api/character/${helper.getCharactersIdFromUrl(
          data.residents,
        )}`,
      );
      yield put(
        setCharactersFromLocation({
          charactersFromLocation,
        }),
      );
    }
  } catch (err) {
    console.dir(err);
  }
}

function* getAdditionalDataFromUrlFork() {
  yield takeEvery(actionsTypes.GET_ADDITIONAL, getAdditionalDataFromUrl);
}

export default function* rootSaga() {
  yield all([fork(getAdditionalDataFromUrlFork)]);
}
