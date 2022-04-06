import createSagaMiddleware from "redux-saga";
import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import rootSaga from "./sagas/index";
import createRootReducer from './reducers'

//@ts-ignore
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk,sagaMiddleware];

export default function configureStore() {
    const store = createStore(
        createRootReducer(),
        composeEnhancers(
        applyMiddleware(
          ...middlewares
        ),
      ),
    );
    sagaMiddleware.run(rootSaga);
    return store;
  }