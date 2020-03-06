<template>
  <div class="first-home">
    <my-nav></my-nav>
    <welcome class="welcome"></welcome>
  </div>
</template>


<script>
  import Welcome from 'components/content/Welcome.vue'
  import MyNav from 'components/content/nav/Nav.vue'

  export default {
    name: 'Home',
    components: {
      Welcome,
      MyNav
    }
  }
</script>

<style lang="less" scoped>
  .first-home {
    display: flex;
    border-radius: 10px;
    .welcome {
      margin: 0 auto;
    }
  }
</style>