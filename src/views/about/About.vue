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
    <div class="progress">
      <my-progress>
        <p>Html</p>
      </my-progress>
      <my-progress>
        <p>css</p>
      </my-progress>
    </div>
  </div>
</template>

<script>
  import MyProgress from 'components/common/Progress.vue'
  export default {
    name: 'About',
    data() {
      return {
        info: "你好，这个网站是我学Vue后做的一个练习，对于0项目经验想转行的人来说，做个网站应该是唯一的展示窗口了。我之前的工作一直是实体制造业，突然某天就不想这么继续下去了，想尝试不一样的环境，于是开始边工作边学习，对于没基础的我来讲挺困难，但也一直坚持到了现在，既然坚持了那就一直持续下去。。。。"
      }
    },
    components: {
      MyProgress
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