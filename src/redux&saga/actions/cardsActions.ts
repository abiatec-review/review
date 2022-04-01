export const getCards = (payload: any) => ({
  type: 'GET_CARDS',
  payload,
});

export const redefineCardList = (payload: any) => ({
  type: 'REDEFINE_CARD_LIST',
  payload,
});

export const changeCharName = (payload: any) => ({
  type: 'CHANGE_CHAR_NAME',
  payload,
});
