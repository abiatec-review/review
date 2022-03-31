import { LOAD_HEROES_FAILURE, LOAD_HEROES_SUCCESS } from "../../actions/heroActions";
import { IHeroesAction } from "../../actions/heroActions/types";
import heroReducer  from "./index";

const mockData = [
  {name: 'Anton', id: 'id331', image: 'testimage1'}, 
  {name: 'Ilia', id: 'id123', image: 'testimage2'}, 
  {name: 'Alice', id: 'id412', image: 'testimage3'}, 
]

const startState = {
  heroes: [],
  isError: false,
  isLoading: false,
}

describe("Test reducer", function () {
  test("should return the proper length of the data", function () {
    const payload = mockData;
    const action: IHeroesAction = {type: LOAD_HEROES_SUCCESS, payload: payload}
    const endState = heroReducer(startState, action)

    expect(endState.heroes.length).toBe(3)
  });

  test("should return the proper name of the value of data", function () {
    const payload = mockData;
    const action: IHeroesAction = {type: LOAD_HEROES_SUCCESS, payload: payload}
    const endState = heroReducer(startState, action)

    expect(endState.heroes[0].name).toBe('Anton')
  })

  test("should return 'true' in value isError", function () {
    const action: IHeroesAction = {type: LOAD_HEROES_FAILURE}
    const endState = heroReducer(startState, action)

    expect(endState.isError).toBe(true)
  })
  
})