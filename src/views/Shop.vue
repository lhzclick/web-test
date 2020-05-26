<template>
  <div class="shop">
    <Header title="我的购物车"></Header>
    <ul class="clothUl">
      <li class="clothLi" v-for="(item,i) in list" :key="i">
        <img src="../assets/cloth.png" alt />
        <div class="price">价格：{{item.price}}</div>
        <div>
          <el-input-number size="small" v-model="item.num" :min="1"    ></el-input-number>
        </div>
      </li>
    </ul>
    <div class="btns">
      <el-button @click="toOrder" class="btn1" type="primary" size="small">下单</el-button>
      <el-button @click="toList" type="primary" size="small">返回列表</el-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "Shop",
  components: {
    Header
  },
  data() {
    return {
      num: 0,
      list: [
        {
          num: 1,
          price:100,
          name:'服装1'
        },
        {
          num: 2,
          price:100,
          name:'服装2'
        },
        {
          num: 3,
          price:100,
           name:'服装3'
        },
        {
          num: 4,
          price:100,
           name:'服装4'
        }
      ]
    };
  },
  methods: {
    toList() {
        this.$router.push("/choice")
    },
    toOrder(){
        localStorage.orderList = JSON.stringify(this.list)
        this.$router.push("/orderDetail")
    }
  }
};
</script>
<style lang="less">
.shop {
  .clothUl {
    display: flex;
    flex-wrap: wrap;
    .clothLi {
      box-sizing: border-box;
      width: 50%;
      padding: 20px;
      .price{
          padding: 5px 0;
      }
      img {
        width: 30vw;
      }
      .num {
        width: 50px;
      }
    }
  }
  .btns {
    margin-top: 3vh;
    .btn1 {
      margin-right: 10vw;
    }
  }
}
</style>