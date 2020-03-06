<template>
  <div class="progress">
    <div class="percentloop">
      <div class="circle-left">
        <div ref="leftcontent"></div>
      </div>
      <div class="circle-right">
        <div ref="rightcontent"></div>
      </div>
      <div class="number">{{ percent }} %</div>
    </div>
    <span class="text">{{text}}</span>
  </div>
</template>
<script>
export default {
  props: {
    text:{
      type: String,
      default: ""
    },
    percentNum: {
      type: [String, Number],
      default: 0
    }
  },
  data () {
    return {
      percent: this.percentNum,
      initDeg: 0,
    }
  },
  methods: {
    goRotate (deg) {
      let timeId = setInterval(() => {
        if (Number(deg) === Number(this.initDeg)) {
          clearInterval(timeId)
        } else if (deg > this.initDeg) {
          this.initDeg += 1
          if (this.initDeg > 180) {
            this.$refs.rightcontent.style.transform = 'rotate(' + (this.initDeg - 180) + 'deg)'
          } else {
            this.$refs.leftcontent.style.transform = 'rotate(' + this.initDeg + 'deg)'
          }
        } else {
          this.initDeg -= 1
          if (this.initDeg >= 180) {
            this.$refs.rightcontent.style.transform = 'rotate(' + (this.initDeg - 180) + 'deg)'
          } else {
            this.$refs.leftcontent.style.transform = 'rotate(' + this.initDeg + 'deg)'
          }
        }
      }, 0)
    }
  },
  computed: {
    getDeg () {
      let deg = 0
      if (this.percent >= 100) {
        deg = 360
      } else {
        deg = parseInt(360 * this.percent / 100)
      }
      return deg
    }
  },
  mounted () {
    this.goRotate(this.getDeg)
  },
  watch: {
    'percentNum': function (val) {
      this.percent = val
      this.goRotate(this.getDeg)
    }
  }
}
</script>

<style scoped lang="less">
  .progress{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text{
      margin-top: 10px;
    }
  }
.percentloop {
      position: relative;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      overflow: hidden;
      .circle-left, .circle-right {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background-color: #1296DB;
        overflow: hidden;
        &>div {
          width: 100%;
          height: 100%;
          background-color: #8a8a8a;
          transform-origin: right center;
          /*transition: all .5s linear;*/
        }
      }
      .circle-right {
        left: 50%;
        &>div {
          transform-origin: left center;
        }
      }
      .number {
        position: absolute;
        top: 9%;
        bottom: 9%;
        left: 9%;
        right: 9%;
        background-color: #fff;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
      }
    }
</style>