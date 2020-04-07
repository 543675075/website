<template>
  <div class="about section">
    <h2>About Me</h2>
    <p class="info">{{info}}</p>
    <ul>
      <li>
        <strong>姓名:</strong>
        陈彦霖
      </li>
      <li>
        <strong>年龄:</strong>
        30
      </li>
      <li>
        <strong>手机:</strong>
        15850396625
      </li>
      <li>
        <strong>邮箱:</strong>
        543675075@qq.com
      </li>
      <li>
        <strong>居住地:</strong>
        张家港后塍
      </li>
    </ul>
    <!-- <div class="progress">
      <my-progress>
        <p>Html</p>
      </my-progress>
      <my-progress>
        <p>css</p>
      </my-progress>
    </div> -->
    <echarts-about></echarts-about>
  </div>
</template>

<script>
  // import MyProgress from 'components/common/Progress.vue'
  import EchartsAbout from './EchartsAbout.vue'
  export default {
    name: 'About',
    data() {
      return {
        info: "没有项目经验，没有工作经验!只能靠开源项目来练习。不放弃。慢慢积累慢慢学"
      }
    },
    components: {
      // MyProgress
      EchartsAbout
    }
  }
</script>


<style lang="less" scoped>
  .info {
    text-indent: 20px;
    text-align: justify;
    line-height: 26px;
    margin: 30px 0;
    color: #777;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    color: #777;
    padding-bottom: 10px;
    border-bottom: 1px solid #999;
  }

  li {
    width: 50%;
    margin-bottom: 20px;
  }

  strong {
    color: #000;
  }
  .progress{
    display: flex;
    justify-content: space-evenly;
  }
</style>