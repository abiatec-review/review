import { ModalActionTypes } from 'redux&saga/types';

const initialState = {
  isOpen: false,
  content: {},
};

const { SHOW_MODAL, HIDE_MODAL } = ModalActionTypes;

export const modalReducer = (
  state: typeof initialState = initialState,
  action: any,
) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, isOpen: true, content: action.payload };
    case HIDE_MODAL:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export default modalReducer;
