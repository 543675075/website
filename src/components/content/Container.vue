<template>
  <div class="wrapper">
    <!-- <router-view></router-view> -->
    <!-- <my-nav class="my-nav"></my-nav> -->
    <!-- <router-view name="a"></router-view> -->

    <!-- <my-nav class="my-nav"></my-nav>
    <router-view></router-view> -->
    <div class="content">
      <welcome class="welcome"></welcome>
      <my-nav class="my-nav"></my-nav>
      <transition name="my" mode="out-in">
        <router-view class="right"></router-view>
      </transition>
    </div>
    <transition>
      <router-view name="a" class="first"></router-view>
    </transition>
  </div>
</template>

<script>
  import MyNav from './nav/Nav.vue'
  import Welcome from './Welcome.vue'

  export default {
    name: "Container",
    components: {
      MyNav,
      Welcome
    },
    data() {
      return {

      }
    },
    mounted() {

    },
  }
</script>

<style lang="less" scoped>
  .wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    width: 1170px;
    height: 600px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #ccc;

    .content {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;

      .welcome {
        width: 350px;
        height: 100%;
      }

      .right {
        flex: 1;
        overflow: auto;
      }
    }
  }

  .first {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>