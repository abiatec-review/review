import { ModalData } from 'src/types/types';
import {
  CharactersAction,
  ModalsActionTypes,
} from '../../actions/modals/action-types';

type ModalInitStateProps = {
  modalType: string;
  modalData: null | ModalData;
};

const initState: ModalInitStateProps = {
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
