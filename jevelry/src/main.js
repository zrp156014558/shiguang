import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 导入axios模块
import axios from "axios";

// 导入element-ui
import ElementUI from 'element-ui';
// 导入element-ui的样式表文件
import 'element-ui/lib/theme-chalk/index.css';
//通过Vue.use()方法注册组件
Vue.use(ElementUI); 

import MH from './components/My-header';
import MF from './components/My-footer';
// import REG from './views/Register';
// import Index from './views/Index';
// import About from './views/About';
// import Detail from './views/Detail';
// import List from './views/List';

// ***配置axios的基础地址，设置端口号3000（不能重复占用端口号）
axios.defaults.baseURL = 'http://127.0.0.1:3000'
// ***原型链上扩展一个属性
Vue.prototype.axios = axios;

// 将My-header.vue,My-footer.vue组件对象做成了全局对象
Vue.component("my-header", MH);
Vue.component("my-footer", MF);

Vue.config.productionTip=false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')