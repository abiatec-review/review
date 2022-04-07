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
    currentListPage: 1,
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
    setCurrentPage(state, page) {
      state.currentListPage = page;
    },
  },
  actions: {
    async fetchFirstData({ commit, state }) {
      const page = state.currentListPage;
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
      let page = state.currentListPage;
      const name = state.searchedCharactersName;
      try {
        // eslint-disable-next-line
        page++;
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character?name=${name}&page=${page}`);
        const results = await data.results;
        commit('setCurrentPage', page);
        commit('addCharactersList', results);
      } catch {
        commit('setCurrentPage', 1);
        throw new Error('There is no more characters by this name!');
      }
    },
  },
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
