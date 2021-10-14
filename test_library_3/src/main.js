// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// 导入./router的时候要注意，两者要同名，也就是别名也要和文件夹同名
import router from './router';
// 在这里，由于使用了element-ui，还需要导入element-ui
// 以下从官方网站中的快速入门进行copy，但是导入App我们默认使用系统的
import ElementUI from 'element-ui';
// 由于使用了element-ui的css文件，所以导入了sass-loader以及node-sass的原因
import 'element-ui/lib/theme-chalk/index.css';

// 使用import的router和element-ui
Vue.use(router);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App) //ElementUI
  // components: { App },
  // template: '<App/>'
})
