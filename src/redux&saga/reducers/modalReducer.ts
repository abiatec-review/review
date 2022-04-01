const initialState = {
  isOpen: false,
  content: {},
};

export const modalReducer = (
  state: typeof initialState = initialState,
  action: any,
) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return { ...state, isOpen: true, content: action.payload };
    case 'HIDE_MODAL':
      console.log('MAKE_MODAL_INVISIBLE');
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export default modalReducer;
