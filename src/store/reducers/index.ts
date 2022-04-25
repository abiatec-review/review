import { combineReducers } from 'redux';
import Characters from './characters';

const createRootReducer = () => combineReducers({
  characters: Characters,
});

export default createRootReducer;