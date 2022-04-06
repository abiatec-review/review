import { CardActionTypes } from 'redux&saga/types';

const { GET_CARDS, REDEFINE_CARD_LIST, CHANGE_CHAR_NAME } = CardActionTypes;

export const getCards = (payload: string) => ({
  type: GET_CARDS,
  payload,
});

export const redefineCardList = (payload: Object) => ({
  type: REDEFINE_CARD_LIST,
  payload,
});

export const changeCharName = (payload: string) => ({
  type: CHANGE_CHAR_NAME,
  payload,
});
