import { defineEpisodeIndex, getThreeRandomElements } from "./validator"

describe("Test validator", () => {
  test("should return proper index", () => {
    expect(defineEpisodeIndex('https://rickandmortyapi.com/api/episode/1')).toBe('1')
    expect(defineEpisodeIndex('https://rickandmortyapi.com/api/episode/2131')).toBe('2131')
    expect(defineEpisodeIndex('')).toBe('')
  })
  test('should return proper array length', () => {
    expect(getThreeRandomElements(['1', '2', '3']).length).toBe(3);
    expect(getThreeRandomElements(['1', '2']).length).toBe(2);
    expect(getThreeRandomElements(['1', '2', '2',  '2', '1']).length).toBe(3);
    expect(getThreeRandomElements([]).length).toBe(0);
  })
})