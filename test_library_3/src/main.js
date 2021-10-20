// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入element-ui
import ElementUI from 'element-ui'
// 导入格式
import 'element-ui/lib/theme-chalk/index.css'
// 导入axios相关组件
import axios from 'axios'
import VueAxios from 'vue-axios'

// 使用axios
Vue.use(VueAxios, axios);
// 使用router组件
Vue.use(router);
// 使用element-ui组件
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 声明router文件
  router,
  // 声明element-ui的使用
  render: h => h(App)
})
