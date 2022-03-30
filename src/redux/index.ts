import {
  createStore, Store, combineReducers, applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import cardsReducer from './reducers/cardsReducer';
import cardsSaga from './sagas/cardsSaga';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([...cardsSaga]);
}

const rootReducer = combineReducers({
  cards: cardsReducer,
});

export type RootState = ReturnType<typeof rootReducer>

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

const store: Store = createAppStore();

export default store;
