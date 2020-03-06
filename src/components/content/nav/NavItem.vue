<template>
  <li class="nav-item" @click=navClick>
    <a href="javascript:;" :class="{active: isTrue}">
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </a>
  </li>
</template>

<script>
  export default {
    name: 'NavItem',
    data() {
      return {
      }
    },
    props: {
      path: {
        type: String,
        default: ""
      }
    },
    methods: {
      navClick() {
        if (this.$route.path != this.path) {
          this.$router.replace(this.path)
        }
      }
    },
    computed: {
      isTrue() {
        return this.$route.path == this.path
      }
    },
  }
</script>

<style lang="less" scoped>
  .nav-item {
    flex: 1;
    border-bottom: 1px solid #F0E2E2;

    &:first-child {
      a {
        background-color: #F8E9E9 !important;
      }
    }

    &:last-child {
      border: none;
    }

    a {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
 
      i {
        padding-bottom: 5px;
      }

    }
  }

  .active {
    background-color: #1296DB;
    color: #fff;

    i {
      color: #fff;
    }
  }
</style>