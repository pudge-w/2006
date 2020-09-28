import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import state from './state';
import mutations from './mutations';
import actions from './actions';

// 引入cities模块
import cities from './modules/cities'

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    cities: cities
  }
})