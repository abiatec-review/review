import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { apiHelper } from '../../../api/api';
import { CharacterLocation, Characters } from '../../../types/types';
import {
  setCharactersFromLocation,
  setEpisodeCharacters,
} from '../../actions/additionalData/actions';
import { helper } from './helper';
import {
  AdditionalDataActionTypes,
  GetAdditionalActionType,
} from '../../actions/additionalData/action-types';

function* getAdditionalDataFromUrl({ payload }: GetAdditionalActionType) {
  try {
    const data: CharacterLocation = yield apiHelper(payload);
    console.log('payload', payload);
    console.log('data', data);
    if (data.residents) {
      const charactersFromEpisode: Characters[] = yield apiHelper(
        `https://rickandmortyapi.com/api/character/${helper.getCharactersIdFromUrl(
          data.residents,
        )}`,
      );
      yield put(setEpisodeCharacters([...charactersFromEpisode]));
    }
    if (data.residents) {
      const charactersFromLocation: Characters[] = yield apiHelper(
        `https://rickandmortyapi.com/api/character/${helper.getCharactersIdFromUrl(
          data.residents,
        )}`,
      );
      yield put(setCharactersFromLocation([...charactersFromLocation]));
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
