import { cardData } from 'Molecules/types';
import { ModalActionTypes } from 'redux&saga/types';

const { SHOW_MODAL, HIDE_MODAL } = ModalActionTypes;

export const showModal = (payload: cardData) => ({
  type: SHOW_MODAL,
  payload,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
