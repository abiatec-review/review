import {deleteEpisodesCharacter, setCharacters, setEpisodes, setEpisodesCharacter} from "../actions";
import charactersReducer from "./charReducer";
import {episodesReducer} from "./episodeReducer";

const mockData = {
  results: [
    {name: 'Alejandro', id: 1, image: 'testimage1'},
    {name: 'Fernando', id: 2, image: 'testimage2'},
    {name: 'Roberto', id: 3, image: 'testimage3'},
  ],
  info: { next: '' }
}

describe('reducer test', () => {

  test('setCharacters', () => {
    const state = {
      characters: [],
      charactersLoader: false,
      page: 1,
      info: {}
    }

    //@ts-ignore
    const action = setCharacters(mockData.results)
    //@ts-ignore
    const endState = charactersReducer(state, action)

    //@ts-ignore
    expect(endState.characters.length).toBe(3)

    expect(endState).toBeDefined()

    expect(endState).toBeTruthy()
  })

  test('setEpisodes', () => {
    const state = {
      episodes: [],
      episodesLoader: false,
      episodeImages: []
    }
    const a = ['a', 'b', 'c']
    //@ts-ignore
    const action = setEpisodes(a)

    const endState = episodesReducer(state, action)

    expect(endState).toEqual({
      episodes: ['a', 'b', 'c'],
      episodesLoader: false,
      episodeImages: []
    })

    expect(endState.episodes).toContain('a')
  })

  test('setEpisodesCharacter', () => {
    const state = {
      episodes: [],
      episodesLoader: false,
      episodeImages: []
    }

    //@ts-ignore

    const action = setEpisodesCharacter(mockData.results)

    const endState = episodesReducer(state, action)

    expect(endState.episodeImages.length).toBe(3)
    expect(endState.episodeImages.length).toBeGreaterThan(0)
    expect(endState.episodeImages).toBeDefined()

  })

  test('delete', () => {
    const state = {
      episodes: [],
      episodesLoader: false,
      episodeImages: ['a', 'b']
    }
    const action = deleteEpisodesCharacter()
    //@ts-ignore
    const endState = episodesReducer(state,action)
    expect(endState).toEqual({
      episodes: [],
      episodesLoader: false,
      episodeImages: []
    })
  })

})
