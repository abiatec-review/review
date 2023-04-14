import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { apiHelper } from '../../../api/api';
import { Characters } from '../../../types/types';
import {
  setCharactersFromLocation,
  setEpisodeCharacters,
} from '../../actions/additionalData/actions';
import { helper } from './helper';
import { AdditionalDataActionTypes } from '../../actions/additionalData/action-types';

function* getAdditionalDataFromUrl({ payload }: any) {
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
  yield takeEvery(
    AdditionalDataActionTypes.GET_ADDITIONAL,
    getAdditionalDataFromUrl,
  );
}

export default function* rootSaga() {
  yield all([fork(getAdditionalDataFromUrlFork)]);
}
