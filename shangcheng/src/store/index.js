import Vue from 'vue'
import Vuex from 'vuex'
import { getBanner, getClassifyList, getRecommend, getDetailInfo } from '../utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bannerList: [],
    reCommendList: [],
    page: 1,
    // loading: false

    classifyList: [],
    detailInfo: {}
  },
  mutations: {
    getBannerList(state, payload) {
      state.bannerList = payload.list
    },
    getRecommendList(state, payload) {
      // state.reCommendList = payload.list
      state.reCommendList = state.reCommendList.concat(payload.list)
      state.page++
      // state.loading = false
    },
    getClassifyList(state, payload) {
      state.classifyList = payload.result
    },
    getDetail(state, payload) {
      state.detailInfo = payload.result
    }
  },
  actions: {
    async getBannerList({ commit }) {
      const res = await getBanner({})
      // state.bannerList = res.result.list
      commit('getBannerList', res.result)
    },
    async getRecommendList({ commit }, payload) {
      const res = await getRecommend(payload)
      commit('getRecommendList', res.result)
    },
    async getClassifyList({ commit }, payload) {
      const res = await getClassifyList({
        type: payload.type
      })
      commit('getClassifyList', res)
    },
    // 详情页数据
    async getDetail({ commit }, payload) {
      const res = await getDetailInfo({
        productId: payload.productId
      })
      commit('getDetail', res)
    }
  },
  modules: {
  }
})
