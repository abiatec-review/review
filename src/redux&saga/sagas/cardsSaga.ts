import { put, takeEvery } from 'redux-saga/effects';
import { redefineCardList } from '../actions/cardsAction';
import { IAction } from '../types';

export function* getCardsSaga(action: IAction) {
  try {
    const resp:Object = yield fetch(`https://rickandmortyapi.com/api/character/?name=${action.payload}`).then((response) => response.json());
    console.log(resp);
    yield put(redefineCardList(resp));
  } catch (error) {
    console.log(error);
  }
}

const cardsSaga = [
  takeEvery('GET_CARDS', getCardsSaga),
];

export default cardsSaga;
