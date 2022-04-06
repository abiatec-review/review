export type IAction = {
  type: string,
  payload: undefined | number | string
}

export type IEpisodesAction = {
  type: string,
  payload: Array<string>
}

export type ICharsAction = {
  type: string,
  payload: Array<string>
}

export type IEpisode = {
  characters: Array<string>,
  name: string,
  episode: string,
  url: string,
  id: number,
  image: 'string'
}

export type IEpisodesResponse = {
  status: string,
  value: IEpisode
}

export type ICardActionCreator = (payloadType: string[])=>IEpisodesAction

export enum CardActionTypes {
  REDEFINE_CARD_LIST='REDEFINE_CARD_LIST',
  CHANGE_CHAR_NAME='CHANGE_CHAR_NAME',
  GET_CARDS='GET_CARDS'
}

export enum EpisodesActionTypes {
  GET_CHARS_INFO='GET_CHARS_INFO',
  CLEAR_EPISODES_INFO='CLEAR_EPISODES_INFO',
  ADD_NEW_CHARACTERS='ADD_NEW_CHARACTERS',
  GET_EPISODES_INFO='GET_EPISODES_INFO',
  ADD_EPISODES_INFO='ADD_EPISODES_INFO',
}

export enum ModalActionTypes {
  SHOW_MODAL='SHOW_MODAL',
  HIDE_MODAL='HIDE_MODAL',
}
