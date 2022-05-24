import * as actionTypes from "redux/actionTypes";

const initialState = {
    modalType: ''
};

const ModalTypeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.SET_CHARACTER: {
            return {
                modalType: 'character'
            }
        }
        case actionTypes.SET_EPISODE: {
            return {
                modalType: 'episode'
            }
        }
        default: return state
    }
}

export default ModalTypeReducer;