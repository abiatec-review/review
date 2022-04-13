import { IInfo, IResponse, IResults } from '../../models/responseTypes';

export interface CardState {
  cards: IResults[],
  info: IInfo,
  loading: boolean,
  error: null | string,
}

export enum CardActionTypes {
  FETCH_CARDS = 'FETCH_CARDS',
  FETCH_MORE_CARDS = 'FETCH_MORE_CARDS',
  FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS',
  FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR',
  FETCH_MORE_CARDS_SUCCESS = 'FETCH_MORE_CARDS_SUCCESS',
}

interface FetchCardsAction {
  type: CardActionTypes.FETCH_CARDS,
  payload: string,
}

interface FetchMoreCardsAction {
  type: CardActionTypes.FETCH_MORE_CARDS,
  payload: string,
}

interface FetchMoreCardsSuccessAction {
  type: CardActionTypes.FETCH_MORE_CARDS_SUCCESS,
  payload: IResponse,
}

interface FetchCardsSuccessAction {
  type: CardActionTypes.FETCH_CARDS_SUCCESS,
  payload: IResponse,
}

interface FetchCardsErrorAction {
  type: CardActionTypes.FETCH_CARDS_ERROR,
  payload: string,
}

export type CardAction = FetchCardsAction | FetchCardsSuccessAction | FetchCardsErrorAction | FetchMoreCardsAction | FetchMoreCardsSuccessAction;
