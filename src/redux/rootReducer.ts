import { combineReducers } from 'redux';
import CharactersReducer from './characters/reducer';
import ModalReducer from './modals/reducer';
import AdditionalData from './additionalData/reducer';
import FairebaseUserDataReducer from './userDataFromFirebase/reducer';
import Authentication from './authentication/reducer';

const createReducer = () =>
  combineReducers({
    CharactersReducer,
    ModalReducer,
    AdditionalData,
    Authentication,
    UserFaireBaseData: FairebaseUserDataReducer,
  });

export default createReducer;
