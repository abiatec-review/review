import * as actionTypes from "src/redux/actionTypes";

const initialState = {
    modalType: ''
};

const ModalTypeReducer = (state = initialState, action: { type: string }) => {
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