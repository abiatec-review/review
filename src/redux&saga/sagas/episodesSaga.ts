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
    console.log(collectEpisodesInfo);
    console.log(exisingChars);
    collectEpisodesInfo.forEach((ep) => {
      const newChars = mapChars(ep.characters);
      newChars.forEach((ch) => {
        if (!(ch.id in exisingChars))charsToFetch.push(ch.path);
      });
    });
    yield put(addNewChars(charsToFetch));
  } catch (error) {
    console.log(error);
  }
}

const episodesSaga = [
  takeEvery('GET_EPISODES_INFO', getEpisodesSaga),
];

export default episodesSaga;
