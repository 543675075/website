<template>
  <div class="section">
    <h2><i class="iconfont my-title-icon">&#xe651;</i>Skill</h2>
    <echarts></echarts>
    <!-- <animation class="animation"></animation> -->
    <!-- <div class="progress-group">

      <skill-progress percentNum="80" text="Html" class="progress-item"></skill-progress>
      <skill-progress percentNum="80" text="Css" class="progress-item"></skill-progress>
      <skill-progress percentNum="60" text="Js" class="progress-item"></skill-progress>
      <skill-progress percentNum="60" text="Vue" class="progress-item"></skill-progress>
    </div> -->
  </div>
</template>

<script>
  import Animation from 'components/common/Animation'
  // import SkillProgress from './SkillProgress.vue'
  import Echarts from './Echarts.vue'
export default {
  name: 'Skill',
  components: {
    Animation,
    // SkillProgress,
    Echarts
  }
}
</script>

<style lang="less" scoped>
  .animation{
    margin: 10px auto;
  }
  .progress-group{
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    .progress-item{
      /* margin-bottom: 50px;
      width: 50%; */
      flex: 1;
    }
  }
</style>