/* eslint-disable @typescript-eslint/ban-ts-comment */
import { mapChars } from 'helpers';
import { RootState } from 'redux&saga';
import { addEpisodesInfo, addNewChars } from 'redux&saga/actions/episodesActions';
import {
  EpisodesActionTypes, ICharsAction, IEpisode, IEpisodesAction, IEpisodesResponse,
} from 'redux&saga/types';
import {
  put, takeEvery, select, call,
} from 'redux-saga/effects';

const { GET_CHARS_INFO, GET_EPISODES_INFO } = EpisodesActionTypes;

export function* getCharsSaga(action: ICharsAction) {
  try {
    const charResponces: Array<IEpisodesResponse> = yield Promise.allSettled(
      action.payload.map((url) => (fetch(`${url}`).then((resp) => resp.json()))),
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
    // const getCardAction:ICardActionCreator = yield take(GET_CHARS_INFO);
    // @ts-ignore

    yield call(getCharsSaga({ type: GET_CHARS_INFO, payload: charsToFetch }));
  } catch (error) {
    console.log(error);
  }
}

const episodesSaga = [
  takeEvery(GET_EPISODES_INFO, getEpisodesSaga),
  takeEvery(GET_CHARS_INFO, getCharsSaga),
];

export default episodesSaga;
