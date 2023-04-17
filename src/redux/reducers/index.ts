import { combineReducers } from 'redux';
import CharactersReducer from './characters';
import ModalReducer from './modal';
import AdditionalData from './getAdditional';
import FairebaseUserDataReducer from './userDataFromFirebase';
import Authentication from './authentication';

const createReducer = () =>
  combineReducers({
    CharactersReducer,
    ModalReducer,
    AdditionalData,
    Authentication,
    UserFaireBaseData: FairebaseUserDataReducer,
  });

export default createReducer;
