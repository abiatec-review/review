import {combineReducers} from 'redux';
import CharactersReducer from './characters';
import ModalReducer from './modal';
import AdditionalData from './getAdditional';

const createReducer = () =>
  combineReducers({
    CharactersReducer,
    ModalReducer,
    AdditionalData,
  });

export default createReducer;
