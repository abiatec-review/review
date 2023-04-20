import { ModalData } from 'src/types/types';
import { GetChartersActionType, ModalsActionTypes } from './action-types';

export const setModalType = (payload: ModalData): GetChartersActionType => {
  return {
    type: ModalsActionTypes.CALL_MODAL,
    payload,
  };
};
