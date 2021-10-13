// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 配置路由1. 导入路由文件
// 原本应该是导入路由文件./router/index.js，但是只要是index.js前端会默认扫描到，因此可以简化成./router，
// 正因如此，配置文件的默认命名为index.js
import router from './router'
// vue-router2. 安装好vue-router后，需要导入,以下仅供学习使用，故注释：
// import VueRouter from "vue-router";


Vue.config.productionTip = false;

// vue-router3. 导入vue-router后，需要显示声明使用VueRouter
// 使用方式如下：（以下仅供学习使用，故注释）
// Vue.use(VueRouter);
// 通过显示声明，其实可以发现vue-router相当于一个插件的方式，其他插件也可以仿效vue-router来进行使用

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 配置路由2. 配置路由设置
  router,
  components: { App },
  template: '<App/>'
  // vue-router1. 学习vue-router，需要运行npm install vue-router --save-dev
  // 安装的这个vue-router会放在node_modules中，相当于引入依赖一样

})
