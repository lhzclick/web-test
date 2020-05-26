<template>
  <div class="login">
    <img class="logo" src="../assets/logo.png" alt />
    <div class="loginContent">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="70px"
        :hide-required-asterisk="true"
      >
        <el-form-item label="用户名" prop="Username">
          <el-input v-model="ruleForm.Username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" >
          <el-input v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        Username: "",
        password:""
      },
      rules: {
        Username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          // { min: 6,message: "长度至少6个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          // { min: 6, message: "长度至少6个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login()
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // --------------接口类-----------------
    login(){
      this.$axios({
        method: "get",
        url: "http://mock-api.com/lzjXAbn4.mock/login",
        data: {
          Username:this.ruleForm.Username,
          password:this.ruleForm.password
        }
      }).then(res => {
        this.$router.push("/upload");
        localStorage.Username = this.ruleForm.Username
      });
    }
  }
};
</script>
<style lang="less">
  .login{
    .logo{
      width: 100px;
      height: 100px;
      margin: auto;
      margin-top: 8vh;
    }
    .loginContent{
      margin-top: 10vh;
      padding-right: 12vw;
    }
  }
</style>
