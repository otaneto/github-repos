import Vue from 'vue';
import Vuex from 'vuex';
import base from '@/store/modules/base';
import github from '@/store/modules/github';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    base,
    github,
  },
});
