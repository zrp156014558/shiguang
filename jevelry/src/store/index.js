import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// ********************************
export default new Vuex.Store({
  state: {
    // 集中管理属性
    uname: sessionStorage.getItem("uname"),
  },
  getters: {
    // 集中获取数据函数
    getuser(state) {
      var obj = { uname: state.uname, islogin: state.islogin };
      return obj;
    },
  },
  mutations: {
    updateUser(state) {
      // 用来更新state中的数据
      state.uname = sessionStorage.getItem("uname");
    },
  },
  actions: {
  },
  modules: {
  }
})
// *********************************