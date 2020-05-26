<template>
  <div class="upload">
    <img class="logo" alt="Vue logo" src="../assets/logo.png" />
    <div class="loginContent">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        :hide-required-asterisk="true"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="身高" prop="height">
          <el-input v-model="ruleForm.height" type="number"></el-input>
        </el-form-item>
        <el-form-item label="体重" prop="weight">
          <el-input v-model="ruleForm.weight"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>



export default {
  name: "Upload",
  data() {
    return {
      ruleForm: {
        name: "",
        sex: "",
        height:"",
        weight:"",
        age:"",
      },
      rules: {
        name: [
          { required: true, message: "姓名", trigger: "blur" },
        ],
        sex: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
        height: [
          { required: true, message: "身高", trigger: "blur" },
        ],
        weight: [
          { required: true, message: "体重", trigger: "blur" },
        ],
        age: [
          { required: true, message: "年龄", trigger: "blur" },
        ],
         
      }
    };
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.upload()
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // --------------接口类-----------------
    upload(){
      this.$axios({
        method: "post",
        url: "http://mock-api.com/lzjXAbn4.mock/measure",
        data: {
          Name:this.ruleForm.name,
          gender:this.ruleForm.sex,
          height:this.ruleForm.height,
          weight:this.ruleForm.weight,
          age:this.ruleForm.age
        }
      }).then(res => {
        console.log(res)
        this.$router.push("/choice");
      });
    }
  }
};
</script>
<style lang="less">
  .upload{
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