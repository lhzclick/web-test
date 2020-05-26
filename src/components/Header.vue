<template>
  <div class="header">
    <h3 class="intro">{{title}}</h3>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .header{
        .intro {
            margin-top: 5vh;
        }
    }
</style>
