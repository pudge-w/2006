import Vue from 'vue'
import Vuex from 'vuex'
import { getBanner, getRecommend } from '../utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bannerList: [],
    reCommendList: []
  },
  mutations: {
    getBannerList(state, payload) {
      state.bannerList = payload.list
    },
    getRecommendList(state, payload) {
      state.reCommendList = payload.list
    }
  },
  actions: {
    async getBannerList({ commit }) {
      const res = await getBanner({})
      // state.bannerList = res.result.list
      commit('getBannerList', res.result)
    },
    async getRecommendList({ commit }) {
      const res = await getRecommend({})
      commit('getRecommendList', res.result)
    }
  },
  modules: {
  }
})
