import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items:[],
    nama_barang: "",
    token: null,
    harga: "",
    tanggal: "",
    deskripsi: "", 
    code: "",
  },
  mutations: {
    SET_BARANG(state, items) {
      state.items = items
    },
    SET_TOKEN(state, token) {
      state.token = token
    },
  },
  actions: {
    async getBarang({ commit }, items) {
      commit('SET_BARANG', items)
    },
    async getToken({ commit }, token) {
      commit('SET_TOKEN', token)
    },
  },
  modules: {
  }
})
