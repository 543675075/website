<template>
  <div class="about section">
    <h2>About Me</h2>
    <p class="info"> 大家好!我是练习时长两年半(一年)的前端练习生陈彦霖，喜欢唱(吃)，跳(睡)，rap(学习)，动漫，鸡你太美～，因为是练习生所以咯之前的工作和前端没任何关系！但那又怎么样呢？不断学习不断进步,等我想好我在写点什么</p>
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