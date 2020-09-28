const mutations = {
  changeCity (state, payload) {
    state.city = payload
  },
  getTopRatedList(state, payload) {
    state.topRatedList = payload.result
  },
  getHotList(state, payload) {
    state.hotList = payload
  }
}

export default mutations;