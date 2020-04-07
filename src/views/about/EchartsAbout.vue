<template>
  <div class='main' ref="main"></div>
</template>



<script>
  const echarts = require('echarts');
  export default {
    name: 'EchartsAbout',
    components: {},
    data() {
      return {
        colorList: [[
          '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
          '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
          '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
          '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
        ],
        [
          '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
          '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
          '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
          '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
        ],
        [
          '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
          '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
          '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
          '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
        ]][2]
      };
    },
    
    mounted() {
      const myChart = echarts.init(this.$refs.main);
      const colorList = this.colorList
      myChart.setOption({
        // 图表标题
        title: {
          show: false,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
          text: "技能图谱",
          x: 'center',        // 水平安放位置，默认为左对齐，可选为：
                              // 'center' ¦ 'left' ¦ 'right'
                               // ¦ {number}（x坐标，单位px）
          y: 'bottom',             // 垂直安放位置，默认为全图顶端，可选为：
                                  // 'top' ¦ 'bottom' ¦ 'center'
                                  // ¦ {number}（y坐标，单位px）
          //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
          // backgroundColor: 'rgba(0,0,0,0)',
          // 接受数组分别设定上右下左边距，同css
          // itemGap: 10,            // 主副标题纵向间隔，单位px，默认为10，
          // textStyle: {
          //   fontSize: 18,
          //   fontWeight: 'bolder',
          //   color: '#333'        // 主标题文字颜色
          // },
          // subtextStyle: {
          //   color: '#aaa'        // 副标题文字颜色
          // }
        },
        backgroundColor: '#fff',
        tooltip: {},
        animationDurationUpdate: function (idx) {
          // 越往后的数据延迟越大
          return idx * 100;
        },
        animationEasingUpdate: 'bounceIn',
        color: ['#fff', '#fff', '#fff'],
        series: [{
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 500,
            edgeLength: 10
          },
          roam: true,
          label: {
            normal: {
              show: true
            }
          },
          data: [{
            "name": "CSS",
            "symbolSize": 82,
            "draggable": true,
            "itemStyle": {
              "normal": {
                "shadowBlur": 100,
                "shadowColor": colorList[9],
                "color": colorList[9]
              }
            }
          }, {
            "name": "HTML",
            "symbolSize": 59,
            "draggable": true,
            "itemStyle": {
              "normal": {
                "shadowBlur": 100,
                "shadowColor": colorList[10],
                "color": colorList[10]
              }
            }
          }, {
            "name": "JAVASCRIPT",
            "symbolSize": 90,
            "draggable": true,
            "itemStyle": {
              "normal": {
                "shadowBlur": 100,
                "shadowColor": colorList[11],
                "color": colorList[11]
              }
            }
          }, {
            "name": "VUE",
            "symbolSize": 134,
            "draggable": true,
            "itemStyle": {
              "normal": {
                "shadowBlur": 100,
                "shadowColor": colorList[12],
                "color": colorList[12]
              }
            }
          }, {
            "name": "BOOTSTRAP",
            "symbolSize": 75,
            "draggable": true,
            "itemStyle": {
              "normal": {
                "shadowBlur": 100,
                "shadowColor": colorList[13],
                "color": colorList[13]
              }
            }
          }, {
            "name": "WEBPACK",
            "symbolSize": 68,
            "draggable": true,
            "itemStyle": {
              "normal": {
                "shadowBlur": 100,
                "shadowColor": colorList[14],
                "color": colorList[14]
              }
            }
          }, {
            "name": "LESS",
            "symbolSize": 62,
            "draggable": true,
            "itemStyle": {
              "normal": {
                "shadowBlur": 100,
                "shadowColor": colorList[15],
                "color": colorList[15]
              }
            }
          }, {
            "name": "JQUERY",
            "symbolSize": 114,
            "draggable": true,
            "itemStyle": {
              "normal": {
                "shadowBlur": 100,
                "shadowColor": colorList[16],
                "color": colorList[16]
              }
            }
          }, {
            "name": "小程序",
            "symbolSize": 130,
            "draggable": true,
            "itemStyle": {
              "normal": {
                "shadowBlur": 100,
                "shadowColor": colorList[17],
                "color": colorList[17]
              }
            }
          }, {
            "name": "GIT",
            "symbolSize": 141,
            "draggable": true,
            "itemStyle": {
              "normal": {
                "shadowBlur": 100,
                "shadowColor": colorList[19],
                "color": colorList[19]
              }
            }
          }]
        }]
      })

    }//
  }
</script>
<style lang='less' scoped>
  .main{
    margin-top: 50px;
    width: 100%;
    height: 100%;
  }
</style>