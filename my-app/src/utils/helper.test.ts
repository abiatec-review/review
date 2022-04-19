import { selectEpisode } from "./helpers";

describe('description', () => {
    test('works', () => {
        expect(selectEpisode('rick22')).toEqual('22')
    })
})