<template>
  <div>
    <h1>通过配置路由实现vue页面加载演示：</h1>
    <h3>  1. 首先. 学习vue-router，需要运行npm/cnpm install vue-router --save-dev
      <br>意思是需要安装这个插件包，安装的这个vue-router会放在node_modules中，相当于引入依赖一样；
      <br>--save是保存的意思，结合-dev意思是保存在config里头的dev文件中；
      <br>2. 在components中新增一个router_component(自定义名字)的vue页面；
      <br>3. 而后在App.vue页面的script中import这个vue模块
      <br>4. import后，在script的component中进行声明；
      <br>5. 要通过路由使用router_component，则需要在新建路由，因此需要新建router文件夹，并新建index.js作为配置文件；
      <br>6. 在外层的main.js中，需要导入我们配置好的路由文件，即router，需要做的事情有：5.1导入路由文件夹，5.2配置路由；
      <br>7. 在App.vue中，使用配置好的路由，通过router-link这个标签来使用路由，通过router-view来展示路由模板内容；
    </h3>
  </div>
</template>

<script>
export default {
  name: "router_components"
}
</script>

<style scoped>

</style>
