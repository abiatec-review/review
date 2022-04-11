import { put, call } from 'redux-saga/effects';
import { fetchCards, fetchMoreCards } from '../../api/servercies/fetchCards';
import { CardAction, CardActionTypes } from '../actions/card';

export function* fetchCardsSaga(action: any): Generator<any, any, any> {
    try {
        const response = yield call(fetchCards, action.payload);
        if(response.hasOwnProperty('error')) {
            yield put({
                type: CardActionTypes.FETCH_CARDS_ERROR,
                payload: response.error,
            })
        } else{
            yield put({
                type: CardActionTypes.FETCH_CARDS_SUCCESS,
                payload: response,
            })
        }
    } catch(e) {
        console.log(e);
    }
}

export function* fetchMoreCardsSaga(action: any): Generator<any, any, any> {
    try {
        const response = yield call(fetchMoreCards, action.payload);
        if(response.hasOwnProperty('error')) {
            yield put({
                type: CardActionTypes.FETCH_CARDS_ERROR,
                payload: response.error,
            })
        } else{
            yield put({
                type: CardActionTypes.FETCH_MORE_CARDS_SUCCESS,
                payload: response,
            })
        }
    } catch(e) {
        console.log(e);
    }
}