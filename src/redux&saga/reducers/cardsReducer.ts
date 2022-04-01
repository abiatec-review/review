const initialState = {
  name: '',
  cardsList: {
    results: [],
  },
};

export const cardsReducer = (
  state: typeof initialState = initialState,
  action: any, // todo
) => {
  switch (action.type) {
    case 'GET_NEW_CARDS':
      return { ...state };
    case 'CHANGE_CHAR_NAME':
      return { ...state, name: action.payload };
    case 'REDEFINE_CARD_LIST':
      return { ...state, cardsList: action.payload };
    default:
      return state;
  }
};

export default cardsReducer;
