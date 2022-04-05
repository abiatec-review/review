import { redefineCardList } from 'redux&saga/actions/cardsActions';
import { IAction } from 'redux&saga/types';
import { put, takeEvery } from 'redux-saga/effects';

export function* getCardsSaga(action: IAction) {
  try {
    const resp:Object = yield fetch(`https://rickandmortyapi.com/api/character/?name=${action.payload}`)
      .then((response) => response.json());
    yield put(redefineCardList(resp));
  } catch (error) {
    console.log(error);
  }
}

const cardsSaga = [
  takeEvery('GET_CARDS', getCardsSaga),
];

export default cardsSaga;
