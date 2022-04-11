import detailsReducer from 'redux/reducers/details';
import ActionType from 'redux/actions/actionType';
import { mockDetailsData, initialDetailsState as initialState} from 'mocks';




describe("Test details reducer", function () {
    test("set data", function () {
        const action = { type: ActionType.SetDetails, payload: mockDetailsData };

        expect(detailsReducer(initialState, action)).toEqual(mockDetailsData);
    });

    test("reset data", function () {
        const action = { type: ActionType.ResetDetails };

        expect(detailsReducer(mockDetailsData, action)).toEqual(initialState);
    });


})