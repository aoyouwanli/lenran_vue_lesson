<template>
  <div>
    <h1>通过配置路由实现vue页面加载演示：</h1>
    <h3>  1. 首先在components中新增一个router_component的vue页面；
      <br>2. 而后在App.vue页面的script中import这个vue模块
      <br>3. import后，在script的component中进行声明；
      <br>4. 要通过路由使用router_component，则需要在新建路由，因此需要新建router文件夹，并新建index.js作为配置文件；
      <br>5. 在外层的main.js中，需要导入我们配置好的路由文件，即router，需要做的事情有：5.1导入路由文件夹，5.2配置路由；
      <br>6. 在App.vue中，使用配置好的路由，通过router-link这个标签来使用路由，通过router-view来展示路由模板内容；
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
