import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import rootSaga from '../sagas';
import createReducer from '../reducers';
import thunk from 'redux-thunk';
const sagaMiddleware = createSagaMiddleware();
import logger from 'redux-logger';

export default function configureStore(preloadedState: any = {}) {
  const store = createStore(
    createReducer(),
    preloadedState,
    applyMiddleware(thunk, sagaMiddleware, logger),
  );

  sagaMiddleware.run(rootSaga, () => {});
  return store;
}
