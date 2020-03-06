<template>
  <div class="wrapper">
    <ul class="outer">
      <li class='big' v-for="(item,index) in skillName[0]" :key="item">{{item}}</li>
    </ul>
    <ul class="inner">
      <li class="small" v-for="(item,index) in skillName[1]" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Animation",
    data() {
      return {
        skillName: [
          ["vue", "webpack", "less", "bootstrap", "jquery", "axios", "小程序", "git"],
          ["html", "css", "js", "H5"]
        ]
      }
    },
  }
</script>

<style lang="less" scoped>
  .wrapper {
    position: relative;
    width: 280px;
    height: 280px;
  }

  .outer {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 258px;
    height: 258px;
    border-radius: 50%;
    border: 3px dashed #999;
    box-sizing: border-box;
  }

  .big {
    position: absolute;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 12px;
    border-radius: 50%;
    background-color: pink;

  }

  .big:nth-child(1) {
    background-color: rgba(122, 100, 100, .5);
    animation: turnX 8s cubic-bezier(.36, 0, .64, 1) -4s infinite alternate, turnY 8s cubic-bezier(.36, 0, .64, 1) 0s infinite alternate;
  }

  .big:nth-child(2) {
    background-color: rgba(255, 200, 100, .5);
    animation: turnX 8s cubic-bezier(.36, 0, .64, 1) -6s infinite alternate, turnY 8s cubic-bezier(.36, 0, .64, 1) -2s infinite alternate;
  }

  .big:nth-child(3) {
    background-color: rgba(122, 255, 1, .5);
    animation: turnX 8s cubic-bezier(.36, 0, .64, 1) -8s infinite alternate, turnY 8s cubic-bezier(.36, 0, .64, 1) -4s infinite alternate;
  }

  .big:nth-child(4) {
    background-color: rgba(100, 10, 255, .5);
    animation: turnX 8s cubic-bezier(.36, 0, .64, 1) -10s infinite alternate, turnY 8s cubic-bezier(.36, 0, .64, 1) -6s infinite alternate;
  }

  .big:nth-child(5) {
    background-color: rgba(31, 92, 49, 0.5);
    animation: turnX 8s cubic-bezier(.36, 0, .64, 1) -12s infinite alternate, turnY 8s cubic-bezier(.36, 0, .64, 1) -8s infinite alternate;
  }

  .big:nth-child(6) {
    background-color: rgb(204, 190, 229);
    animation: turnX 8s cubic-bezier(.36, 0, .64, 1) -14s infinite alternate, turnY 8s cubic-bezier(.36, 0, .64, 1) -10s infinite alternate;
  }

  .big:nth-child(7) {
    background-color: rgba(207, 191, 40, 0.424);
    animation: turnX 8s cubic-bezier(.36, 0, .64, 1) -16s infinite alternate, turnY 8s cubic-bezier(.36, 0, .64, 1) -12s infinite alternate;
  }

  .big:nth-child(8) {
    background-color: rgba(133, 13, 49, 0.5);
    animation: turnX 8s cubic-bezier(.36, 0, .64, 1) -18s infinite alternate, turnY 8s cubic-bezier(.36, 0, .64, 1) -14s infinite alternate;
  }

  .inner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 158px;
    height: 158px;
    border-radius: 50%;
    border: 3px dashed #999;
  }

  .small {
    position: absolute;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    text-align: center;
    background-color: powderblue;
  }

  .small:nth-child(1) {
    background-color: rgba(228, 20, 20, 0.8);
    animation: innerX 8s cubic-bezier(.36, 0, .64, 1) -4s infinite alternate, innerY 8s cubic-bezier(.36, 0, .64, 1) 0s infinite alternate;
  }

  .small:nth-child(2) {
    background-color: rgba(192, 189, 207, 0.8);
    animation: innerX 8s cubic-bezier(.36, 0, .64, 1) -8s infinite alternate, innerY 8s cubic-bezier(.36, 0, .64, 1) -4s infinite alternate;
  }

  .small:nth-child(3) {
    background-color: rgba(228, 20, 20, 0.8);
    animation: innerX 8s cubic-bezier(.36, 0, .64, 1) -12s infinite alternate, innerY 8s cubic-bezier(.36, 0, .64, 1) -8s infinite alternate;
  }

  .small:nth-child(4) {
    background-color: rgba(192, 189, 207, 0.8);
    animation: innerX 8s cubic-bezier(.36, 0, .64, 1) -16s infinite alternate, innerY 8s cubic-bezier(.36, 0, .64, 1) -12s infinite alternate;
  }

  @keyframes turnX {
    0% {
      left: -25px;
    }

    100% {
      left: 225px;
    }
  }

  @keyframes turnY {
    0% {
      top: -25px;
    }

    100% {
      top: 225px;
    }
  }

  @keyframes innerX {
    0% {
      left: -20px;
    }

    100% {
      left: 130px;
    }
  }

  @keyframes innerY {
    0% {
      top: 130px;
    }

    100% {
      top: -20px;
    }
  }
</style>