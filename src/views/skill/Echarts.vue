<template>
  <div class='main' ref="main">
  </div>
</template>



<script>
  // 引入 ECharts 主模块
  var echarts = require('echarts');
  export default {
    name: 'Echarts',
    components: {},
    data() {
      return {

      };
    },
    mounted() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.main);
      // 绘制图表
      // myChart.setOption({
      //   // title: {
      //   //   text: '技能掌握',
      //   // },
      //   tooltip: {
      //     trigger: 'axis',
      //     axisPointer: {
      //       type: 'shadow'
      //     }
      //   },
      //   // legend: {
      //   //   data: ['2011年', '2012年']
      //   // },
      //   grid: {
      //     left: '0%',
      //     right: '4%',
      //     bottom: '3%',
      //     containLabel: true
      //   },
      //   xAxis: {
      //     show: false,
      //   },
      //   yAxis: {
      //     axisLine: {
      //       show: false
      //     },
      //     axisTick: {
      //       show: false
      //     },
      //     axisLabel: {
      //       color: "#333",
      //       fontSize: 16
      //     },
      //     type: '',
      //     data: ['小程序', 'ajax+git', 'Vue', 'Javascript', 'Css+git', 'Html']
      //   },
      //   series: [
      //     {
      //       name: '条',
      //       type: 'bar',
      //       data: [60, 50, 60, 50, 80, 80],
      //       yAxisIndex: 0,
      //       // 柱子之间间距
      //       barCategoryGap: 50,
      //       barWidth: 15,
      //       // 设置柱子中的文字
      //       label: {
      //         show: true,
      //         position: "inside",
      //         formatter: "{c}%"
      //       },
      //       // 设置柱子的颜色
      //       itemStyle: {
      //         color: "rgb(18,150,219)",
      //         barBorderRadius: 20
      //       }

      //     },
      //     {

      //       name: '框',
      //       type: 'bar',
      //       data: [100, 100, 100, 100, 100, 100],
      //       yAxisIndex: 1,
      //       // 柱子之间间距
      //       barCategoryGap: 50,
      //       barWidth: 15,
      //       itemStyle: {
      //         color: "none",
      //         borderColor: "#00c3de",
      //         borderWidth: 3,
      //         barBorderRadius: 20
      //       }
      //     }
      //   ]
      // }
      // );
      myChart.setOption({
        grid: {
          top: "10%",
          left: 0,
          bottom: "10%",
          containLabel: true
        },
        // 不显示x轴的相关信息
        xAxis: {
          show: false
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            data: ["HTML5", "CSS3", "javascript", "VUE", "AJAX+GIT"],
            // 不显示y轴的线
            axisLine: {
              show: false
            },
            // 不显示刻度
            axisTick: {
              show: false
            },
            // 把刻度标签里面的文字颜色设置为白色
            axisLabel: {
              color: "#555",
              fontSize: 16
            }
          },
          {
            data: [100, 100, 100, 100, 100],
            inverse: true,
            // 不显示y轴的线
            axisLine: {
              show: false
            },
            // 不显示刻度
            axisTick: {
              show: false
            },
            // 把刻度标签里面的文字颜色设置为白色
            axisLabel: {
              color: "#fff"
            }
          }
        ],
        series: [
          {
            name: "条",
            type: "bar",
            data: [80, 70, 60, 50, 40],
            yAxisIndex: 0,
            // 修改第一组柱子的圆角
            itemStyle: {
              barBorderRadius: 20,
              // 此时的color 可以修改柱子的颜色
              color: "rgb(18,150,219)"
               
              
            },
            // 柱子之间的距离
            barCategoryGap: 50,
            //柱子的宽度
            barWidth: 10,
            // 显示柱子内的文字
            label: {
              show: true,
              position: "inside",
              // {c} 会自动的解析为 数据  data里面的数据
              formatter: "{c}%"
            }
          },
          {
            name: "框",
            type: "bar",
            barCategoryGap: 50,
            barWidth: 14,
            yAxisIndex: 1,
            data: [100, 100, 100, 100, 100],
            itemStyle: {
              color: "none",
              borderColor: "#00c1de",
              borderWidth: 2,
              barBorderRadius: 15
            }
          }
        ]
      })
    },

  }

</script>
<style lang='less' scoped>
  .main {
    width: 100%;
    height: 100%;
  }
</style>