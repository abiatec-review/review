import { mapChars } from 'helpers';
import { RootState } from 'redux&saga';
import { addEpisodesInfo, addNewChars } from 'redux&saga/actions/episodesActions';
import { IEpisode, IEpisodesAction, IEpisodesResponse } from 'redux&saga/types';
import { put, takeEvery, select } from 'redux-saga/effects';

export function* getEpisodesSaga(action: IEpisodesAction) {
  try {
    const responces: Array<IEpisodesResponse> = yield Promise.allSettled(
      action.payload.map((url) => (fetch(`${url}`).then((resp) => resp.json()))),
    );

    const collectEpisodesInfo:IEpisode[] = responces.map((resp) => resp.value);
    yield put(addEpisodesInfo(collectEpisodesInfo));

    const exisingChars:Object = yield select((state: RootState) => state.episodes.characters);
    const charsToFetch:Array<string> = [];

    collectEpisodesInfo.forEach((ep) => {
      const newChars = mapChars(ep.characters); // rework to parse only 3 items
      for (let i = 0; i < 3; i++) {
        if (!(newChars[i].id in exisingChars))charsToFetch.push(newChars[i].path);
      }
    });
    const charResponces: Array<IEpisodesResponse> = yield Promise.allSettled(
      charsToFetch.map((url) => (fetch(`${url}`).then((resp) => resp.json()))),
    );
    yield put(addNewChars(
      charResponces.reduce((acc, ch) => ({
        ...acc, [ch.value.id]: ch.value.image,
      }), {}),
    ));
  } catch (error) {
    console.log(error);
  }
}

const episodesSaga = [
  takeEvery('GET_EPISODES_INFO', getEpisodesSaga),
];

export default episodesSaga;
