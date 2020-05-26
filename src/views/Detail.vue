<template>
  <div class="detail">
    <Header title="服装详情"></Header> 
    <img class="img" src="../assets/cloth.png" alt />
    <div class="intro">
      <div>{{detail.desc}}</div>
    </div>
    <div class="btns">
      <el-button @click="toShop" class="btn1" type="primary" size="small">加入购物车</el-button>
      <el-button @click="toList" type="primary" size="small">返回列表</el-button>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "Detail",
  components:{
    Header
  },
  data() {
    return {
      detail: {}
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    toList() {
        this.$router.push("/choice")
    },
    toShop(){
        this.$router.push("/shop")
    },
    // --------------接口类-----------------
    getDetail() {
      this.$axios({
        method: "get",
        url: `http://mock-api.com/lzjXAbn4.mock/cloth/${this.$route.query.id}`,
        data: {}
      }).then(res => {
        this.detail = eval("(" + res.data + ")");
        //   console.log()
      });
    }
  }
};
</script>
<style lang="less">
.detail {
  .img {
    width: 80vw;
  }
  .intro{
      padding: 10px 0;
  }
  .btns {
    margin-top: 3vh;
    .btn1 {
      margin-right: 10vw;
    }
  }
}
</style>
