<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
        <el-button type="info" @click="resetLoginForm">重置</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="closeHandle">
      <span v-model="dialogAlert">{{ dialogAlert }}</span>
      <span slot="footer" class="dialog.footer">
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import vue_router from "../router";

export default {
  name: "Login",
  data(){
    return {
      form: {
        username: '',
        password: ''
      },

      // 表单验证，需要在el-form-item中增加prop属性
      rules: {
        username: [
          // 有规则校验，则页面上标签前方会提示一个红色*，如果没有校验规则，则页面要素的标签前面不会有*
          // 以下这个为用户名栏位是否必输的校验规则：
          {required: true, message: '账号不可为空', trigger: 'blur'},
          // 以下增加用户名栏位的最小最大长度的校验规则
          {min: 6, max: 32, message: '账户位数需介于6到32位之间', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ]
      },

        // 对话框显示还是隐藏
        dialogVisible: false,
        // 对话框弹出信息
        dialogAlert: ''
      }
    },
  methods:{
    onSubmit(formName){
      // 为表单绑定验证功能
      this.$refs[formName].validate((vaild) => {
        if(vaild){
          // 验证密码和用户名，这里应该采用接口进行验证，目前简单的对比用户名和密码
          if(this.form.username==this.form.password){
            // 使用vue-router路由到指定页面，该方式称之为编程式导航
            this.$router.push('/main');
          } else {
            this.dialogAlert= "用户名和密码不正确！！！";
            this.resetLoginForm();
            this.dialogVisible = true;
            return false;
          }
        } else {
          this.dialogAlert= "用户名和密码不一致";
          this.dialogVisible = true;
          return false;
        }
      });
    },
    // 重置用户名和密码栏位，直接通过refs将ref为loginForm内的所有要素全部清空
    resetLoginForm() {
      this.$refs.loginForm.resetFields();
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
