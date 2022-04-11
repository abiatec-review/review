import { put, call } from 'redux-saga/effects';
import { fetchEpisodes, fetchCharacters } from '../../api/servercies/fetchEpisodes';
import { EpisodesActionTypes } from '../actions/episodes';

export function* fetchEpisodsSaga(action: any): Generator<any, any, any> {
    try {
        const responseEpisodes = yield call(fetchEpisodes, action.payload);
        if(responseEpisodes.hasOwnProperty('error')) {
            yield put({
                type: EpisodesActionTypes.FETCH_EPISODES_ERROR,
                payload: responseEpisodes.error,
            })
        } else{
            yield put({
                type: EpisodesActionTypes.FETCH_EPISODES_SUCCESS,
                payload: responseEpisodes,
            })
        }
    } catch(e) {
        console.log(e);
    }
}