<template>
  <div class="shop">
    <Header title="下单成功"></Header>
   
    <el-form :model="ruleForm" label-width="70px" class="total">
      <el-form-item label="订单号">
        <el-input v-model="ruleForm.orderNumber" disabled></el-input>
      </el-form-item>
    </el-form>
    <div class="btns">
      <el-button @click="toList" type="primary" size="small">返回列表</el-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "OrderDetail",
  components: {
    Header
  },
  data() {
    return {
      num: 0,
      list: [],
      ruleForm: {
       orderNumber:0
      }
    };
  },
  created() {
    this.ruleForm.orderNumber = `DDH${new Date().getTime()}`
  },
  methods: {
    toList() {
      this.$router.push("/choice");
    },
  }
};
</script>
<style lang="less">
.shop {
    padding-bottom: 10vh;
  .clothUl {
    display: flex;
    flex-wrap: wrap;
    .clothLi {
      box-sizing: border-box;
      width: 50%;
      padding: 20px;
      img {
        width: 30vw;
      }
      .num {
        width: 50px;
      }
    }
  }
  .total{
      padding-right: 12vw;
  }
  .btns {
    margin-top: 3vh;
    .btn1 {
      margin-right: 10vw;
    }
  }
}
</style>