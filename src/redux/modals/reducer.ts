import { CharacterLocation } from 'src/types/types';
import { CharactersAction, ModalsActionTypes } from './action-types';

type ModalInitStateProps = {
  modalType: string;
  modalData: CharacterLocation | null;
};

const initState: ModalInitStateProps = {
  modalType: '',
  modalData: {
    created: '',
    dimension: '',
    id: 0,
    name: '',
    residents: [],
    type: '',
    url: '',
    episode: [],
    gender: '',
    image: '',
    location: { name: '', url: '' },
    origin: { name: '', url: '' },
    species: '',
    status: '',
  },
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
