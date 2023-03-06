import {actionsTypes} from '../actions/actionsType';

const initState: any = {
  modalType: '',
  modalData: null,
};

const Modal = (state = initState, action: {type: string; payload: any}) => {
  switch (action.type) {
    case actionsTypes.CALL_MODAL: {
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
