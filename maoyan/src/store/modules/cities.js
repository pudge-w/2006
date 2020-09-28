import { getCitiesList } from '../../utils/api';

const citiesModule = {
  namespaced: true,
  state: {
    citieslist: []
  },
  mutations: {
    getCities(state, payload) {
      state.citieslist = payload.result
    }
  },
  actions: {
    async getCities({ commit }) {
      const res = await getCitiesList()
      // console.log(res)
      commit('getCities', {
        result: res
      })
    }
  }
}

export default citiesModule;