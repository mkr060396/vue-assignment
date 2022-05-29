import Vue from 'vue'
import Vuex from 'vuex'
import somes from './modules/somes'

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    somes
  }
})
