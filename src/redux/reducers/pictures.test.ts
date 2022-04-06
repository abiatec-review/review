import pictureReduser from 'redux/reducers/pictures';
import ActionType from 'redux/actions/actionType';
import { mockPicturesData, initialPituresState as initialState } from 'mocks';




describe("Test info reducer", function () {
    test("set data", function () {
        const action = { type: ActionType.SetPictures, payload: mockPicturesData };

        expect(pictureReduser(initialState, action)).toEqual(mockPicturesData);
    });

    test("reset data", function () {
        const action = { type: ActionType.ResetPictures };

        expect(pictureReduser(mockPicturesData, action)).toEqual(initialState);
    });


})