<template>
  <div class="info">
    <div class="icon">
      <img src="~assets/img/icon.jpg" alt="">
    </div>
    <div class="h1">
      <span>Welcome to my&nbsp;</span>
      <!-- <strong class="title"></strong> -->
      <vue-typed-js :strings="strings" :loop="true" :typeSpeed="100" :backSpeed="100">
        <strong class="typing"></strong>
      </vue-typed-js>
    </div>
    <clock></clock>
    <div class="contact">
      <a class="my-font" href="javascript:;"><i class="iconfont">&#xe70e;</i></a>
      <a class="my-font" href="javascript:;"><i class="iconfont">&#xe503;</i></a>
      <!-- <a class="my-font" href="javascript:;"><i class="iconfont qq">&#xe64e;</i></a> -->
      <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=543675075&amp;site=qq&amp;menu=yes" class="my-font">
        <i class="iconfont qq">&#xe64e;</i>
      </a>
    </div>
  </div>
</template>


<script>
  import 'common/typed.js'
  import Clock from 'components/common/Clock'

  export default {
    name: 'Info',
    data() {
      return {
        strings: ["个人网站" , "Personal website"]
      }
    },
    components: {
      Clock,
    },
  }
</script>

<style lang="less" scoped>
  .info {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .h1 {
    text-transform: uppercase;
    margin: 30px auto;
  }

  img {
    max-width: 160px;
    height: auto;
    border-radius: 50%;
  }

  .contact {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .my-font {
    display: block;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    border: 1px solid #999;
    background-color: #fff;
    transition: all .7s;

    i {
      transition: all .7s;
    }

    &:hover {
      background-color: #1296DB;
    }

    &:hover i {
      color: #fff;
    }
  }

  .qq {
    display: inline-block;
    transform: translateX(5px);
  }

  .typed-element {
    display: inline;
  }
</style>