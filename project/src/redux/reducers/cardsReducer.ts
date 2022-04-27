import { CardAction, CardState, CardActionTypes } from '../actions/card';

const initialState: CardState = {
  cards: [],
  info: {
    count: 0,
  },
  loading: false,
  error: null,
  filters: {},
  sort: 'nameA',
};

export const cardReducer = (state = initialState, action: CardAction): CardState => {
  switch (action.type) {
    case CardActionTypes.FETCH_CARDS: {
      return {
        ...state,
        filters: action.payload,
        loading: true,
      };
    }
    case CardActionTypes.FETCH_MORE_CARDS_SUCCESS: {
      const { cards } = state;
      const newCards = [...cards, ...action.payload.results];
      return {
        ...state,
        loading: false,
        cards: newCards,
        info: action.payload.info,
      };
    }
    case CardActionTypes.FETCH_CARDS_SUCCESS: {
      return {
        ...state,
        error: null,
        cards: action.payload.results,
        info: action.payload.info,
        loading: false,
      };
    }
    case CardActionTypes.FETCH_CARDS_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case CardActionTypes.SORT_CARDS: {
      return {
        ...state,
        sort: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};