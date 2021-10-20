// 官方的命名规范，index.js为所有文件夹的的主配置文件
// 需导入vue
import Vue from 'vue';
// 需导入vue-router
import Router from "vue-router";
// 导入自定义的component页面main作为首页
import Main from "../views/Main";
// 导入登录页面；
import login from "../views/Login";
import userprofile from "../views/user/Profile";
import userlist from "../views/user/userList";
// 安装路由
Vue.use(Router);

// 配置导出路由
export default new Router({
  routes:[
    {
      //配置路由路径：
      path: '/main',
      name: 'Main',
      // 跳转的组件
      component: Main,
      // 嵌套路由：
      children: [{
        //配置路由路径，并且配置需要接收的对象，如下id属于需要接收的对象；
        path: '/user/userprofile/:id/:username',
        name: 'userprofile',
        // 跳转的组件
        component: userprofile,
        // 如果通过props接收对象，要增加这个属性
        props: true
      },
        {
          //配置路由路径：
          path: '/user/userlist',
          name: 'userlist',
          // 跳转的组件
          component: userlist
        },
        {
          // 配置返回首页的初始的路径
          path: '/backToMain',
          // 配置重定向的路径：
          redirect: '/main'
        }
      ]
    },
    {
      //配置路由路径：
      path: '/login',
      name: 'login',
      // 跳转的组件
      component: login
    }
  ]
});
