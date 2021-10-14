// 官方的命名规范，index.js为所有文件夹的的主配置文件
// 需导入vue
import Vue from 'vue';
// 需导入vue-router
import VueRouter from "vue-router";

// 导入自定义的component页面main作为首页
import Main from "../components/main";
// 还需要导入想要使用的模块，也就是我们自定义的component
import router_components from "../components/router_components";


// 安装路由
Vue.use(VueRouter);

// 配置导出路由
export default new VueRouter({
  routes:[
    {
    //配置路由路径：
    path: '/router_components',
    // 配置路由所使用的名字
    name:router_components,
    // 跳转的组件
    component: router_components
    },
    {
      //配置路由路径：
      path: '/main',
      // 配置路由所使用的名字
      name:Main,
      // 跳转的组件
      component: Main
    }
  ]
});
