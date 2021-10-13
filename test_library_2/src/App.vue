<template>
  <div id="app">
<!--    以下logo.png就是对应assets里头的logo文件夹下的文件，目前不需使用，故注释-->
<!--    <img src="./assets/logo.png">-->
<!--    以下通过import的方式，在VUE页面上使用的component，也就是模块化的思想，后续不在使用，本来可以删掉文件，但是这里以注释-->
<!--    <HelloWorld/>-->

    <h1>案例演示：热部署</h1>
    当在是src目录下的App.vue更新后，在运行中的网页也会同步更新，这个叫热部署
    <case_component/>
    <h1>router-link案例演示：</h1>
    路由演示:router-link标签，可以当成a标签来使用，里头的to相当于herf：
    <br>完成之后，还需要router-view，展示路由template模板的内容，如果没有这个标签就会直接跳转：
    <br>
    <router-link to="/main">首页</router-link>
    <router-link to="/router_components">router-演示页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import的component目前不需要使用，故注释
// import HelloWorld from './components/HelloWorld'

// 导入case_component模块
import case_component from './components/case_component'
export default {
  name: 'App',
  components: {
    // 不需后续使用，故注释
    // HelloWorld

    // import case_component后，在component上声明后，才能在template上进行使用
    case_component,
  }
}
</script>

<style>
/*在style中增加了scoped这个属性，意思是style只在当前template中生效，不会在其他的template中生效*/
/*如果没加，则加载到当前template的所有页面均生效*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
