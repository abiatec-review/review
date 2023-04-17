import { GetChartersActionType, ModalsActionTypes } from './action-types';

export const setModalType = (payload: any): GetChartersActionType => {
  return {
    type: ModalsActionTypes.CALL_MODAL,
    payload,
  };
};
