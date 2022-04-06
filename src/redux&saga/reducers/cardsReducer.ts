import { CardActionTypes } from 'redux&saga/types';

const initialState = {
  name: '',
  cardsList: {
    results: [],
  },
};

const { CHANGE_CHAR_NAME, REDEFINE_CARD_LIST } = CardActionTypes;

export const cardsReducer = (
  state: typeof initialState = initialState,
  action: any,
) => {
  switch (action.type) {
    case CHANGE_CHAR_NAME:
      return { ...state, name: action.payload };
    case REDEFINE_CARD_LIST:
      return { ...state, cardsList: action.payload };
    default:
      return state;
  }
};

export default cardsReducer;
