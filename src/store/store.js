import Vue from 'vue';
import Vuex from 'vuex';
import repos from '@/store/modules/repos';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    repos,
  },
});
