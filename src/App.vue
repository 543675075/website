<template>
  <div id="app">
    <canvas id='canvas'></canvas>
    <container></container>
  </div>
</template>

<script>
import Container from 'components/content/Container'

export default {
  name: "App",
  components: {
    Container,
  }
}
</script>

<style lang="less" scoped>
   #canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
