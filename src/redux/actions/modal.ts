import {actionsTypes} from './actionsType';

export const setModalType = (payload: any) => {
  return {
    type: actionsTypes.CALL_MODAL,
    payload,
  };
};
