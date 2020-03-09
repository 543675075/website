<template>
  <!-- <div class="section">
    <h2><i class="iconfont my-title-icon">&#xe625;</i>作品</h2>
    <ul class="show">
      <li class="show-item" @mouseover="show" @mouseleave="hide">
        <img src="~assets/img/iphone.jpg">
        <a href="https://github.com/543675075/-" target="a_block" class="icon" v-if="isShow" >
          <i class="iconfont">&#xe6df;</i>
          <span>仿苹果官网</span>
        </a>
      </li>
      <li class="show-item">
        <img src="~assets/img/iphone.jpg">
        <a href="https://github.com/543675075/-" target="a_block" class="icon" v-if="isShow" >
          <i class="iconfont">&#xe6df;</i>
          <span>仿苹果官网</span>
        </a>
    </li>
      <li class="show-item"><a href="javascript:;">商城</a></li>
      <li class="show-item"><a href="javascript:;">商城</a></li>
    </ul>
  </div> -->
  <div class="section">
    <h2><i class="iconfont my-title-icon">&#xe625;</i>作品</h2>
    <ul class="show">
      <li class="show-item" @mouseover="show(index)" @mouseleave="hide(index)" v-for="(item , index) in data">
        <a :href="item.link" target="a_block" class="icon">
          <img :src="item.src">
          <i class="iconfont"> &#xe6df;</i>
        </a>
        <p class="text">{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Show",
    data() {
      return {
        isShow: false,
        src: require("assets/img/iphone.jpg"),
        data: [
          {
            src: require("assets/img/iphone.jpg"),
            link: 'https://github.com/543675075/-',
            text: '仿的苹果的官网',
            num: 0
          },
          {
            src: require("assets/img/shopping.jpg"),
            link: 'https://github.com/543675075/-',
            text: '仿蘑菇街的一个Vue移动页面'
          },
          {
            src: require("assets/img/wx.jpg"),
            link: 'https://github.com/543675075/-',
            text: '微信小程序'
          },
        ]
      }
    },
    methods: {
      show(index) {
        this.isShow = true
      },
      hide(index) {
        this.isShow = false
      }
    },
  }
</script>

<style lang="less" scoped>
  .show {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
  }

  .show-item {
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
    border: 1px solid #999;
    border-radius: 10px;
    overflow: hidden;

    .icon {
      position: relative;
      display: block;
      width: 100%;
      height: 70%;
      overflow: hidden;

      i {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        opacity: 0;
        transition: all .5s;
      }

      &:hover i {
        opacity: 1;
      }

      img {
        transition: all 1s;
        width: 100%;
        height: 100%;

        &:hover {
          transform: scale(1.2);
          opacity: .5;
        }
      }
    }
  }

  .text {
    margin: 30px;
  }
</style>