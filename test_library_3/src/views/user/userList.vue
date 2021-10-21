<template>
  <div>
    <h1>路由钩子函数的学习：</h1>
    <h6>
      <br>1. 首先在需要创建路由钩子函数的页面中的script中，定义路由钩子，以本页面为演示案例：
      <h5 style="color: red"> 路由钩子写法如下：beforeRouteEnter:(to, from, next) => { next(); }</h5>
          beforeRouteEnter相当于一个过滤器一样，在进入当前页面的路由钩子之前过滤一遍，需要的参数是to、from、next
      <h5 style="color: red">也有函数可以在离开当前页面进入下一个路由之前，再过滤一遍：beforeRouteLeave:(to,from,next) => { next(); }</h5>
          beforeRouteEnter和beforeRouteLeave都属于路由钩子函数，区别是使用的场景有不同的地方；
      <br>在函数内，有next();执行语句，执行next(); 之前，我们可以编写执行一些业务功能；
      <br>本案例中，通过F12的console.log来观察我们的执行语句；
      <br>两者的入参都是to、from、next, 函数{}中间都是需要next();作为下一步的执行语句；
      <h5 style="color: red">
          to: 路由将要跳转的路径信息；
        <br>from: 路径跳转前的路径信息；
        <br>next: 路由的控制参数:
        <br>{{ placeholder }}next()跳入下一个页面；
        <br>{{ placeholder }}next('/path')改变路由的跳转方向，使其跳转到指定的路由或者页面；
        <br>{{ placeholder }}next(false)返回原来的页面；
        <br>{{ placeholder }}next( vm=>{} )，仅在beforeRouteEnter中使用，vm是实例的组件；
      </h5>
          2. 本案例中，在路有钩子函数当中，需要进行异步请求，则我们需要安装Axios和vue-axios：执行npm/cnpm install axios vue-axios -S
      <br>2.1 main.js中需要进行引用，则首先要导入axios和vue-axios，以及使用axios，详情参考main.js；
      <br>{{ placeholder }}由于涉及到异步通讯，目前本案例采用静态访问json文件的方式进行测试，并没有进行实际的后端或者数据库通讯；
      <br>{{ placeholder }}静态资源只能存放在static中才能读取，故json文件存放在static中；
      <br>{{ placeholder }}由于涉及到测试，故新建mock（测试专有文件名）文件夹，我们的测试静态文件名字取为：testData.json；
      <br>3. 需要采用异步通讯，那么意味着我们展示的时候，数据应该已经准备好，也就是说在进入路由钩子之前，就应该发起了请求；
      <br>因此，我们需要在beforeRouteEnter:(to,from,next) => { next(); }中，或者在next();之前进行异步通讯访问；
      <br>首先，我们要创建一个通讯的方法，本案例使用方法名为：getTestData();
      <br>接着，可以通过上面提到的next( vm=>{} );这个方法在进入路由之前也就是beforeRouteEnter中，执行getTestData()这个方法；
      <br>使用方式为：beforeRouteEnter:(to,from,next) => { next( vm => { vm.getTestData(); } ); }
      <br>也可以在next();之前，执行getTestData()方法；但是如果在next之前执行axios方法,需要先import  axios，否则无法使用；
      <br>在testData中的userName为：{{testData.userName}}
      <br>testData中的数据为：{{testData}}
    </h6>
  </div>
</template>

<script>
import axios from "axios";
  export default {
    name: "userList",
    props: ['username'],
    // 进入路由之前的路有钩子
    beforeRouteEnter:(to,from,next) => {
      console.log("进入当前页面的路由钩子之前：");
      // 直接访问本地路径的静态资源，也可以通过http://localhost:8080/static/mock/testData.json的方式
      // 一下演示不成功：
      // axios.get('/static/mock/testData.json').then(res => (this.testData=res.data));
      // axios.get('http://localhost:8080/static/mock/testData.json').then(response => (this.testData=response.data));
      // next();
      next(vm => {
          // 进入路由之前执行该方法
          vm.getTestData()
        }
      );
    },
    // 进入路由之后的路由钩子
    beforeRouteLeave:(to,from,next) => {
      next();
    },
    data() {
      return {
        placeholder: '\xa0\xa0\xa0\xa0',
        userName: this.username,
        testData: {
          userName: null,
          remarks: null,
          pageNumber: null,
          userInfo: {
            buyerId: null
          }
        }
      }
    },
    methods: {
      getTestData: function(){
        // alert("getTestData is begin:");
        // 有两种方式实现axios的请求后，将请求对象赋值给当前的实例对象
        // 方式一：
        // var _this = this;
        // _this.axios({
        //   method: 'get',
        //   url: 'http://localhost:8080/static/mock/testData.json'
        //   }
        // ).then(function (response) {
        //   console.log(response);
        //   _this.testData = response.data;
        //   console.log("赋值给testData" + _this.testData);
        // });
        // 推荐使用方式二
        // 方式二：
        this.axios.get('http://localhost:8080/static/mock/testData.json').then(response => {this.testData=response.data});
      }
    }
  }
</script>

<style scoped>

</style>
