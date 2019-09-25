import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    repos: [],
  },
  mutations: {
    SET_REPOS: (state, payload) => {
      Object.assign(state, { repos: payload });
    },
  },
  actions: {
    setRepos: ({ commit }, payload) => {
      commit('SET_REPOS', payload);
    },
  },
  getters: state => state.repos,
});
