import { SET_CHARACTER, SET_EPISODE } from "redux/actionTypes";

const initialState = {
    modalType: ''
};

const ModalTypeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_CHARACTER: {
            return {
                modalType: 'character'
            }
        }
        case SET_EPISODE: {
            return {
                modalType: 'episode'
            }
        }
        default: return state
    }
}

export default ModalTypeReducer;