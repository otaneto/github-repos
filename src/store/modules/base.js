export default {
  namespaced: true,
  devtools: false,
  state: {
    snackbar: {},
  },
  mutations: {
    SET_SNACKBAR: (state, payload) => {
      state.snackbar = payload;
    },
  },
  actions: {
    setSnackbar: ({ commit }, payload) => {
      commit('SET_SNACKBAR', payload);
    },
  },
  getters: {
    snackbar: state => state.snackbar,
  },
};
