import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import axios from 'axios';
import { State } from '../modules/types';

// eslint-disable-next-line
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    characterList: [],
  },
  getters: {
    getCharactersList(state) {
      return state.characterList;
    },
  },
  mutations: {
    setCharactersList(state, items) {
      state.characterList.push(...items);
    },
  },
  actions: {
    async fetchData({ commit }, name = '') {
      // try {
      //   const res = await fetch(`https://rickandmortyapi.com/api/character?name=${name}&page=1`);
      //   const { results } = await res.json();
      //   commit('setCharactersList', results);
      // } catch {
      //   throw new Error('There is on such an characher. Try another one!');
      // }
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character?name=${name}&page=1`);
        const results = await data.results;
        commit('setCharactersList', results);
      } catch {
        throw new Error('There is on such an characher. Try another one!');
      }
    },
    async fetchAnotherData(context, name = '') {
      const res = await fetch(`https://rickandmortyapi.com/api/character?name=${name}&page=2`);
      const { results } = await res.json();
      context.commit('setCharactersList', results);
    },
  },
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
