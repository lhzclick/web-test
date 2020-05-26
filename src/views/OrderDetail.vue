<template>
  <div class="shop">
    <Header title="我的购物车"></Header>
    <ul class="clothUl">
      <li class="clothLi" v-for="(item,i) in list" :key="i">
        <img src="../assets/cloth.png" alt />
        <div class="price">价格：{{item.price}}</div>
        <div class="price">数量：{{item.num}}</div>
      </li>
    </ul>
    <el-form :model="ruleForm" label-width="70px" class="total">
      <el-form-item label="件数">
        <el-input v-model="ruleForm.numTotal" disabled></el-input>
      </el-form-item>
      <el-form-item label="总价">
        <el-input v-model="ruleForm.priceTotal" disabled></el-input>
      </el-form-item>
    </el-form>
    <div class="btns">
      <el-button @click="pay" class="btn1" type="primary" size="small">付款</el-button>
      <el-button @click="toList" type="primary" size="small">返回购物车</el-button>
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
        numTotal: 0,
        priceTotal: 0
      }
    };
  },
  created() {
    this.list = JSON.parse(localStorage.orderList);
    this.list.map((item, i) => {
      this.ruleForm.numTotal += item.num;
      this.ruleForm.priceTotal += item.num * item.price;
    });
  },
  methods: {
    toList() {
      this.$router.push("/shop");
    },
    toOrder() {
      localStorage.orderList = this.list;
    },
    // --------------接口类-----------------
    pay(){
      this.$axios({
        method: "post",
        url: "http://mock-api.com/lzjXAbn4.mock/pay",
        data: {
          Name:'服装1',
          channel:this.ruleForm.priceTotal,
          paytime:new Date().getTime(),
          amount:this.ruleForm.numTotal
        }
      }).then(res => {
        this.$router.push("/paySuccess");
      });
    }
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