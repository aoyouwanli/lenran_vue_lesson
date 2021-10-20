<template>
  <div>
    <h1>参数传递案例：</h1>
    <h3>
      <br>参数传递，从Main界面传递到个人信息界面：
      <br>1. 路由界面，即本案例的Main.vue界面中的路由设置：
      <br>router-link to="/user/userProfile"
      <br>变成以下形式，输入id参数：
      <br>router-link :to="{name: '/user/userProfile', params:{id: 1}}"
      <h2 style="color: red">1.1 其中，name是路由router文件夹下index.js中的name，两者名称要完全相同；</h2>
      <br>params是放置参数的地方，可以以params:{id: 1, username: 'learn VUE'}的方式放置多个参数，本案例中是一个参数：id。
      <br>此时有个点要注意，如果是字符型的参数是使用单引号''，并非使用双引号""；
      <h2 style="color: red">1.2 里头的"to" 变成了":to",相当于v-blind:to的形式；</h2>
      <br>2. 在路由的router文件夹中的index.js文件中，增加接收参数的设置，从原来的：
      <br>path: '/user/userProfile'
      <br>变成以下形式：
      <br>path: '/user/userProfile/:id'，并且，增加props: true,这个属性
      <br>相当于是参数的路径当中，绑定了一个参数id，这样就能从Main页面中，将参数带到路由中；
      <br>3. 最后一步：将参数带入到当前界面：
      <br>在当前界面中，需要使用$router.params.id将存在路由中的参数id取出来；
      <br>其中，“$route.params.”是固定写法，后面的id是参数名称，可以是任意的参数，只要存进路由的参数都可以取出来；
      <br>目前id的值为： {{$route.params.id}}
      <br>4. 其他接收参数的形式：通过props来接收参数:
      <h2 style="color: red">4.1 在路由的router文件夹中的index.js文件中，增加接收参数的属性:  props: true</h2>
      <h2 style="color: red">4.2 在Profile.vue界面的script中，增加props:['username']</h2>
          其中username是对象名称；
      <br>就相当于前阵子，我们学的插槽或者template中，接收变量或者对象的方法，通过props来进行接受或者传递；
      <br>目前通过第一种$route.params.username的方式接收到的的username为：{{$route.params.username}}
      <br>通过第二种方式接收到的username为：{{username}}
      <h2 style="color: red">最后：推荐使用第二种接收参数的方式</h2>
    </h3>
  </div>
</template>

<script>
export default {
  props:['username'],
  name: "userProfile"
}
</script>

<style scoped>

</style>
