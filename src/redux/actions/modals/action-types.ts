import { ModalData } from '../../../types/types';

export const enum ModalsActionTypes {
  CALL_MODAL = 'CALL_MODAL',
}

export type GetChartersActionType = {
  type: ModalsActionTypes.CALL_MODAL;
  payload: ModalData;
};

export type CharactersAction = GetChartersActionType;
