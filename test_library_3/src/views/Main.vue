<template>
    <div class="login_box">
      <!-- 表单 -->
      <el-form ref="LoginFormRef" :model="loginForm" label-width="0" :rules="LoginFormRules" class="login_form">
        <el-form-item prop="username">
          <!-- 用户名-->
          <el-input v-model="loginForm.username" ></el-input>
        </el-form-item>
        <!-- 密码-->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'Main',
  data(){
    return {
      // 登录的初始化数据：备注默认应该是空
      loginForm:{
        username:'',
        password:''
      },
      // 正则表达式的相关校验
      LoginFormRules:{
        username:[
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    // 清空表单的校验
    resetLoginForm() {
      this.$refs.LoginFormRef.resetFields()
    },
    //登录的方法：登录逻辑写里面
    login() {
      //首先是校验如果正则的校验通过 -->> 执行数据传输
      this.$refs['LoginFormRef'].validate(async (valid) => {
        if (valid) {

          //简单的在main.js里面配置了一下如下
          //Vue.prototype.$http = axios
          //axios.defaults.baseURL = 'https://localhost:8080/api/private/v1/'

          //执行数据的交互过程 --即对服务端对应接口进行访问
          const {data:res} = await this.$http.post('login',this.loginForm)

          //正常这里是要分情况写： 1.如果成功 登录到首页面 2.如果失败 弹出对应的提示
          if (res.meta.status==200){
            this.$message({
              message:'登录成功',
              type:'success'
            })
            //如果登录成功存储token
            window.sessionStorage.setItem('token',res.data.token)
            //跳到首页面 这里是根据路由跳转
            this.$router.push('/home')
          }else{
            this.$message({
              message:res.meta.msg,
              type:'error'
            })
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-box{
  border: 1px solid #DCDFE6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title{
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>
