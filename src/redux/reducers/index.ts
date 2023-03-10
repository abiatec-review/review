import {combineReducers} from 'redux';
import CharactersReducer from './characters';
import ModalReducer from './modal';
import AdditionalData from './getAdditional';
import Authentification from './authentification';
import FairebaseUserDataReducer from './userDataFromFairebase';

const createReducer = () =>
  combineReducers({
    CharactersReducer,
    ModalReducer,
    AdditionalData,
    Authentification,
    UserFaireBaseData: FairebaseUserDataReducer,
  });

export default createReducer;
