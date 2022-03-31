const initialState = {
  isOpen: true,
};

export const modalReducer = (
  state: typeof initialState = initialState,
  action: any,
) => {
  switch (action.type) {
    case 'MAKE_MODAL_VISIBLE':
      console.log('MAKE_MODAL_VISIBLE');

      return { ...state, isOpen: true };
    case 'MAKE_MODAL_INVISIBLE':
      console.log('MAKE_MODAL_INVISIBLE');

      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export default modalReducer;
