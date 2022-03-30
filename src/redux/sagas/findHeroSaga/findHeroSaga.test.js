// import { runSaga } from "redux-saga";
// import { getHeroes, loadHeroes } from "./index";

// describe("Test reducer", function () {
//   test("should return the proper length of the data", async function () {
   
//      // we push all dispatched actions to make assertions easier
//     // and our tests less brittle
//     const dispatchedActions = [];

//     // we don't want to perform an actual api call in our tests
//     // so we will mock the fetchImages api with jest
//     // this will mutate the dependency which we may reset if other tests
//     // are dependent on it
//     const mockedImages = ['img1', 'img2'];
//     getHeroes = jest.fn(() => Promise.resolve(mockedImages));

//     const fakeStore = {
//         getState: () => ({ nextPage: 1 }),
//         dispatch: action => dispatchedActions.push(action),
//     };

//     // wait for saga to complete
//     await runSaga(fakeStore, loadHeroes).done;

//     expect(getHeroes.mock.calls.length).toBe(1);
//   });
  
// })
