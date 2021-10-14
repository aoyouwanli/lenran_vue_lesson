<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" aria-placeholder="请输入账号" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" aria-placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>请输入账号和密码</span>
      <span solt="footer" class="dialog.footer">
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Login",
  date(){
    return {
      form: {
        username: '',
        password: ''
      },

      // 表单验证，需要在el-form-item中增加prop属性
      rules: {
        username: [
          {required: true, message: '账号不可为空', tigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不可为空', tigger: 'blur'}
        ]
      },

        // 对话框显示还是隐藏
        dialogVisible: false
      }
    },
  methods:{
    onSubmit(formName){
      // 为表单绑定验证功能
      alert("登录功能相当于表单验证，");
      this.$refs[formName].validate((valid) => {
        if(valid){
          // 使用vue-router路由到指定页面，该方式称之为编程式导航
          this.$router.push('/main')
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
