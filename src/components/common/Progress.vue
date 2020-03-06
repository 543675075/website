<template>
  <div class=progress>
    <svg width="230" height="230" viewBox="0 0 230 230" transform="rotate(90),scale(-1,1)">
      <!-- 进度条渐变色 -->
      <defs>
        <linearGradient id="blue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#9148FF" />
          <stop offset="100%" stop-color="#1296DB" />
        </linearGradient>
      </defs>
      <!--进度条渐变
  　　　　外层圆 -->
      　　　　　　　　
      <circle cx="115" cy="115" r="50" fill="none" stroke="#f7f7f7" stroke-width="8" />
      <!--外层圆
  　　　　内容圆 -->
      　　　　　　
      <circle class="test" cx="115" cy="115" r="50" fill="none" stroke="url(#blue)" stroke-width="8"
        stroke-dasharray="314.1592653589793" stroke-dashoffset="62.83185307179586" stroke-linecap="round" />
      <!--内层圆-->
    </svg>
    <span>80%</span>
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: 'Progress'
  }
</script>

<style lang="less" scoped>
 .progress{
   position: relative;
   display: inline-block;
 }
 span{
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%,-50%);
 }
 p{
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
   bottom: 30px;
 }
</style>