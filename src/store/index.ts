import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import useFetch from '../composables/useFetchCharactersList';
import { State } from '../modules/types';

// eslint-disable-next-line
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    characterList: [],
    searchedCharactersName: '',
    currentListPage: 1,
    isFetchingData: false,
    errorMessage: '',
  },
  getters: {
    getCharactersList(state) {
      return state.characterList;
    },
    getSearchedCharactersName(state) {
      return state.searchedCharactersName;
    },
    getIsFetchingData(state) {
      return state.isFetchingData;
    },
    getErrorMessage(state) {
      return state.errorMessage;
    },
  },
  mutations: {
    setCharactersList(state, items) {
      state.characterList = items;
    },
    addCharactersList(state, items) {
      state.characterList.push(...items);
    },
    resetCharactersList(state) {
      state.characterList = [];
    },
    setSearchedCharactersName(state, name) {
      state.searchedCharactersName = name;
    },
    setCurrentPage(state, page) {
      state.currentListPage = page;
    },
    switchFetchingData(state, switcher = false) {
      state.isFetchingData = switcher;
    },
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
    resetErrorMessage(state) {
      state.errorMessage = '';
    },
  },
  actions: {
    async fetchFirstData({ commit, state }) {
      const page = 1;
      const name = state.searchedCharactersName;
      commit('setCurrentPage', page);

      commit('switchFetchingData', true);
      const { charactersList, error } = await useFetch(name, page);
      if (error.value) {
        commit('setErrorMessage', error);
        commit('resetCharactersList');
      }
      if (charactersList.value) commit('setCharactersList', charactersList.value);
      commit('switchFetchingData');
    },
    async fetchExtraData({ commit, state }) {
      let page = state.currentListPage;
      const name = state.searchedCharactersName;

      // eslint-disable-next-line
      page++;
      commit('resetErrorMessage');
      commit('switchFetchingData', true);
      const { charactersList, error } = await useFetch(name, page);
      if (error.value) commit('setErrorMessage', error);
      commit('setCurrentPage', page);
      if (charactersList.value) commit('addCharactersList', charactersList.value);
      commit('switchFetchingData');
    },
  },
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
