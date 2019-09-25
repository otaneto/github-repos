const defaultState = {
  repos: [],
};

const mutations = {
  SET_REPOS: (state, payload) => {
    Object.assign(state, { repos: payload });
  },
};

const actions = {
  setRepos: ({ commit }, payload) => {
    commit('SET_REPOS', payload);
  },
};

const getters = {
  languages: state => state.languages,
  repos: state => state.repos,
};

export default {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: defaultState,
};
