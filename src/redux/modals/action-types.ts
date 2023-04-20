import { ModalData } from 'src/types/types';

export const enum ModalsActionTypes {
  CALL_MODAL = 'CALL_MODAL',
}

export type GetChartersActionType = {
  type: ModalsActionTypes.CALL_MODAL;
  payload: ModalData;
};

export type CharactersAction = GetChartersActionType;
