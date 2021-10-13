<template>
  <div>
      <h1>导入component模块演示：</h1>
      <h3>  1. 首先在components中新增一个case_component的vue页面；
        <br>2. 而后在App.vue页面的script中import这个vue模块
        <br>3. import后，在script的component中进行声明；
        <br>4. 最后在App.vue中的template就可以使用这个模块了
      </h3>
  </div>
</template>

<script>
export default {
  name: "case_component"
}
</script>

<style scoped>
/*在style中增加了scoped这个属性，意思是style只在当前case_component中生效，不会在其他的template中生效*/

</style>
