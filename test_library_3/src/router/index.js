// 官方的命名规范，index.js为所有文件夹的的主配置文件
// 需导入vue
import Vue from 'vue';
// 需导入vue-router
import Router from "vue-router";
// 导入自定义的component页面main作为首页
import Main from "../views/Main";
// 导入登录页面；
import Login from "../views/Login";
import userProfile from "../views/user/Profile";
import userList from "../views/user/userList";
// 安装路由
Vue.use(Router);

// 配置导出路由
export default new Router({
  routes:[
    {
      //配置路由路径：
      path: '/main',
      // 跳转的组件
      component: Main,
      // 嵌套路由：
      children: [{
        //配置路由路径：
        path: '/user/userProfile',
        name: userProfile,
        // 跳转的组件
        component: userProfile
      },
        {
          //配置路由路径：
          path: '/user/userList',
          name: userList,
          // 跳转的组件
          component: userList
        }]
    },
    {
      //配置路由路径：
      path: '/Login',
      name: Login,
      // 跳转的组件
      component: Login
    }
  ]
});
