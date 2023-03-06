import {combineReducers} from 'redux';
import CharactersReducer from './characters';
import ModalReducer from './modal';
import AdditionalData from './getAdditional';
import Authentification from './authentification';

const createReducer = () =>
  combineReducers({
    CharactersReducer,
    ModalReducer,
    AdditionalData,
    Authentification,
  });

export default createReducer;
