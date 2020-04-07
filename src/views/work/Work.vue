<template>
  <div class="section">
    <h2><i class="iconfont work-icon">&#xe61a;</i>工作</h2>
    <!-- <p>{{info}}</p> -->
    <animation class="animation"></animation>

    <!-- <input type="button" value="点我返回简历" @click="btnClick"> -->
  </div>
</template>

<script>
    import Animation from 'components/common/Animation'
export default {
  name: 'Work',
  components: {
    Animation
  },
  data() {
    return {
      info: "期待某一天这里能展示属于我自己的项目"
    }
  },
  methods: {
    btnClick(){
      this.$router.replace("/resume")
    }
  },
}
</script>

<style lang="less" scoped>
  .section{
    position: relative;
  }
  .work-icon{
    color: #1296DB;
  }
  .animation{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
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