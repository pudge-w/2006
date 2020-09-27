import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 用来管理所有的公共状态
  state: {
    count: 0
  },
  // 存放同步方法的地方，也是唯一能够去改变state的值的地方
  mutations: {
    // mutations里面都可以直接用一个参数state
    incrementM(state, payload) {
      // console.log(state.count)
      // console.log(num)
      state.count += payload.num
    }
  },

  // 存放异步方法的地方,在这里触发mutations里面的方法
  actions: {
    incrementA(context) {
      setTimeout(() => {
        context.commit('incrementM', { num: 6 })
      }, 1000)
    }
  },
  modules: {
  }
})
