import {
  CharactersAction,
  ModalsActionTypes,
} from '../actions/modals/action-types';

const initState: any = {
  modalType: '',
  modalData: null,
};

const Modal = (state = initState, action: CharactersAction) => {
  switch (action.type) {
    case ModalsActionTypes.CALL_MODAL: {
      return {
        ...state,
        modalType: action.payload.modalType,
        modalData: action.payload.modalData,
      };
    }

    default:
      return state;
  }
};

export default Modal;
