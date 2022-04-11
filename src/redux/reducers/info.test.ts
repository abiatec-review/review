import infoReducer from 'redux/reducers/info';
import ActionType from 'redux/actions/actionType';
import { mockInfoData, initialInfoState as initialState} from 'mocks';




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