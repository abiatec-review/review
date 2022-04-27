import { IInfo, IResponse, IResults } from '../../models/responseTypes';

export interface IFilters {
  name?: string,
  status?: string,
  gender?: string,
  species?: string,
}

export interface CardState {
  cards: IResults[],
  info: IInfo,
  loading: boolean,
  error: null | string,
  filters: IFilters,
  sort: string,
}

export enum CardActionTypes {
  FETCH_CARDS = 'FETCH_CARDS',
  FETCH_MORE_CARDS = 'FETCH_MORE_CARDS',
  FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS',
  FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR',
  FETCH_MORE_CARDS_SUCCESS = 'FETCH_MORE_CARDS_SUCCESS',
  SORT_CARDS = 'SORT_CARDS',
}

interface FetchCardsAction {
  type: CardActionTypes.FETCH_CARDS,
  payload: IFilters,
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

interface SortCardsAction {
  type: CardActionTypes.SORT_CARDS,
  payload: string,
}

export type CardAction = FetchCardsAction |
FetchCardsSuccessAction |
FetchCardsErrorAction |
FetchMoreCardsAction |
FetchMoreCardsSuccessAction |
SortCardsAction;

export const fetchCardsAction = (value: IFilters) => ({
  type: CardActionTypes.FETCH_CARDS,
  payload: value,
});

export const fetchMoreCardsAction = (nextLink: string | undefined | null) => ({
  type: CardActionTypes.FETCH_MORE_CARDS,
  payload: nextLink,
});

export const sortCardsAction = (value: string) => ({
  type: CardActionTypes.SORT_CARDS,
  payload: value,
});
