import Vue from 'vue';
import Vuex from 'vuex';
// import actions from './actions'
// import mutations from './mutations'

// modules
// import * as quotation from './module/quotation'

Vue.use(Vuex);

const state = {
  userInfo: {
    username: ''
  },
  sidebarActive: true,
}

// const modules = {
//   ...quotation
// }

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules,
  strict: debug
})
