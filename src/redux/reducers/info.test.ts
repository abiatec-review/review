import infoReducer from 'redux/reducers/info';
import ActionType from 'redux/actions/actionType';
const mockInfoData = {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character/?page=2',
    prev: null
};

const initialState = {
    count: 0,
    pages: null,
    next: null,
    prev: null
}

describe("Test info reducer", function () {
    test("set data", function () {
        const action = { type: ActionType.SetPicturesInfo, payload: mockInfoData };

        expect(infoReducer(initialState, action)).toEqual(mockInfoData);
    });

    test("reset data", function () {
        const action = { type: ActionType.ResetPicturesInfo };

        expect(infoReducer(mockInfoData, action)).toEqual(initialState);
    });


})