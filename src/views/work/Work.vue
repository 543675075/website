<template>
  <div class="section">
    <h2><i class="iconfont work-icon">&#xe61a;</i>工作</h2>
    <p>前几年的工作和前端没有任何关系,很多类型的工作都经历过,具体的已经写在简历里了</p>
    <input type="button" value="点我查看" @click="btnClick">
  </div>
</template>

<script>
export default {
  name: 'Work',
  methods: {
    btnClick(){
      this.$router.replace("/resume")
    }
  },
}
</script>

<style lang="less" scoped>
  .work-icon{
    color: #1296DB;
  }
  p{
    text-indent: 20px;
    margin: 50px;
  }
  input[type="button"]{
    margin-left: 200px;
    color: #fff;
    background-color: #1296DB;
    font-size: 16px;
    width: 150px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border: none;
    border-radius: 40px;
    outline: none;
    cursor: pointer;
    &:active{
      background-color: rgb(15, 122, 180);
    }
  }
</style>