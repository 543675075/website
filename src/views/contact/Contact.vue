<template>
  <div class="section">
    <h2><i class="iconfont my-title-icon">&#xe637;</i>Contact</h2>

    <ul>
      <li>
        <i class="iconfont icon-font">&#xe504;</i>
        张家港金港镇
      </li>
      <li>
        <i class="iconfont icon-font">&#xe61c;</i>
        15850396625
      </li>
      <li>
        <i class="iconfont icon-font">&#xe61b;</i>
        543675075@qq.com
      </li>
      <li>
        <i class="iconfont icon-font">&#xe616;</i>
        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=543675075&amp;site=qq&amp;menu=yes">
          543675075(点我交谈)
        </a>
      </li>
    </ul>

    <maps></maps>
  </div>
</template>

<script>
  import Maps from 'components/common/Maps'
  export default {
    name: 'Contact',
    components: {
      Maps
    }
  }
</script>

<style lang="less" scoped>
  ul{
    border-bottom: 1px solid #999;
    margin-bottom: 50px;
  }
  li {
    padding: 20px 0;
  }

  .icon-font {
    padding: 0 20px;
    color: #1296DB;
  }
</style>