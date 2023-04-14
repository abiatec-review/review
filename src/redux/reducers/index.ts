import { combineReducers } from 'redux';
import CharactersReducer from './characters/characters';
import ModalReducer from './modal';
import AdditionalData from './getAdditional';
import FairebaseUserDataReducer from './userDataFromFairebase';
import Authentication from './authentication/authentication';

const createReducer = () =>
  combineReducers({
    CharactersReducer,
    ModalReducer,
    AdditionalData,
    Authentication,
    UserFaireBaseData: FairebaseUserDataReducer,
  });

export default createReducer;
