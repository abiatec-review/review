import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import PicturesReducer from 'redux/reducers/pictures';
import infoReducer from 'redux/reducers/info';
import detailsReducer from 'redux/reducers/details';
import userReducer from 'redux/reducers/user';


const rootReducer = combineReducers({
  pictures: PicturesReducer,
  info: infoReducer,
  details: detailsReducer,
  user: userReducer
});


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}


const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default  store;