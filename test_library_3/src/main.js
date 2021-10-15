// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
// 导入element-ui
import ElementUI from 'element-ui';
// 导入格式
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'

Vue.use(router);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
