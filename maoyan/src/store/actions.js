import { getTopRated, getIndexList } from '../utils/api';

const actions = {
  // 请求首页的最受欢迎列表
  async getTopRatedList({ commit }) {
    const res = await getTopRated()
    // 将拿到的数据赋值给state里面的变量
    commit('getTopRatedList', res.result)
  },
  async getHotList({ commit }) {
    const res = await getIndexList()
    commit('getHotList', res.result)
  }
}

export default actions;