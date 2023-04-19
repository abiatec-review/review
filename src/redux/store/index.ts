import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from '../sagas';
import createReducer from '../reducers';
const sagaMiddleware = createSagaMiddleware();
import { composeWithDevTools } from 'redux-devtools-extension';

function configureStore() {
  const store = createStore(
    createReducer(),
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}

export const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
