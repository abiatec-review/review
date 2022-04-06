import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import axios from 'axios';
import { State } from '../modules/types';

// eslint-disable-next-line
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    characterList: [],
    searchedCharactersName: '',
  },
  getters: {
    getCharactersList(state) {
      return state.characterList;
    },
    getSearchedCharactersName(state) {
      return state.searchedCharactersName;
    },
  },
  mutations: {
    setCharactersList(state, items) {
      state.characterList = items;
    },
    addCharactersList(state, items) {
      state.characterList.push(...items);
    },
    setSearchedCharactersName(state, name) {
      state.searchedCharactersName = name;
    },
  },
  actions: {
    async fetchFirstData({ commit, state }) {
      const page = 1;
      const name = state.searchedCharactersName;
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character?name=${name}&page=${page}`);
        const results = await data.results;
        commit('setCharactersList', results);
      } catch {
        throw new Error('There is on such an characher. Try another one!');
      }
    },
    async fetchExtraData({ commit, state }) {
      const page = 2;
      const name = state.searchedCharactersName;
      const res = await fetch(`https://rickandmortyapi.com/api/character?name=${name}&page=${page}`);
      const { results } = await res.json();
      commit('addCharactersList', results);
    },
  },
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
