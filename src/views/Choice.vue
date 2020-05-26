<template>
  <div class="choice">
    <Header title="请选择服装"></Header>  
    <ul class="clothUl">
      <li @click="toDetail" class="clothLi" v-for="(item,i) in clothList" :key="i">
        <img src="../assets/cloth.png" alt />
        <div>{{item.name}}</div>
        <div>价格：￥{{item.price}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "Choice",
  components:{
    Header
  },
  data() {
    return {
      clothList: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    toDetail(){
        this.$router.push({
            path:"/detail",
            query: { id: 1 }
        })
    },
    // --------------接口类-----------------
    getList() {
      this.$axios({
        method: "get",
        url: "http://mock-api.com/lzjXAbn4.mock/cloth",
        data: {}
      }).then(res => {
        this.clothList = eval("(" + res.data + ")");
      });
    }
  }
};
</script>
<style lang="less">
.choice {
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
    }
  }
}
</style>
