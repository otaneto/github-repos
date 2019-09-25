import Vue from 'vue';
import Vuex from 'vuex';
import github from '@/store/modules/github';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    github,
  },
});
