import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { State } from '../modules/types';
import fetchCharactersList from '../composables/fetchCharactersList';

// eslint-disable-next-line
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    characterList: [],
    searchedCharactersName: '',
    currentListPage: 1,
    isFetchingData: false,
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
    switchFetchingData(state, switcher = false) {
      state.isFetchingData = switcher;
    },
  },
  actions: {
    async fetchFirstData({ commit, state }) {
      const page = 1;
      const name = state.searchedCharactersName;
      try {
        commit('switchFetchingData', true);
        const charactersList = await fetchCharactersList(page, name);
        commit('setCharactersList', charactersList);
        commit('switchFetchingData');
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
        commit('switchFetchingData', true);
        const charactersList = await fetchCharactersList(page, name);
        commit('setCurrentPage', page);
        commit('addCharactersList', charactersList);
        commit('switchFetchingData');
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
