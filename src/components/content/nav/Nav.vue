<template>
  <nav class="nav">
    <div class="nav-list">
      <nav-item path="/home">
        <img src="~assets/img/home.png" alt="" slot="icon">
      </nav-item>
      <nav-item path="/about">
        <i class="iconfont" slot="icon">&#xe706;</i>
         <span slot="text">关于</span>
      </nav-item>
      <nav-item path="/resume">
        <i class="iconfont" slot="icon">&#xe67b;</i>
         <span slot="text">简历</span>
      </nav-item>
      <nav-item path="/skill"> 
        <i class="iconfont" slot="icon">&#xe706;</i>
         <span slot="text">技能</span>
      </nav-item>
      <nav-item path="/work">
        <i class="iconfont work" slot="icon">&#xe61a;</i>
         <span slot="text">工作</span>
      </nav-item>
      <nav-item path="/show">
        <i class="iconfont" slot="icon">&#xe625;</i>
         <span slot="text">作品</span>
      </nav-item>
      <nav-item path="/contact">
        <i class="iconfont" slot="icon">&#xe637;</i>
         <span slot="text">联系</span>
      </nav-item>
    </div>
  </nav>
</template>

<script>
  import NavItem from './NavItem.vue'
  export default {
    name: "Nav",
    components: {
      NavItem,
    }
  }
</script>

<style lang="less" scoped type="text/less">
  .nav {
    width: 100px;
    height: 100%;
    background-color: #F8E9E9;
    border-radius: 10px;

    .nav-list {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .work{
        transform: translateX(10px);/*这个字体图标有点问题*/
      }
    }
  }
</style>