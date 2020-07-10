<template>
<!-- :style="{width:width,height:height}" -->
  <div
    :id="id"
    class="base-echarts">
  </div>
</template>

<script>
/*
 *@description: 图标基础组件
 *@author: liujun
 *@email: liujun2son@163.com
 *@date: 2020-06-14 14:31:03
 *@version V0.1.0
 *@API:
 *@ 参数
 *   id 组件标签的id
 *   option 图表配置
 *
 *@ 事件
 *
 *
*/
// 引入 ECharts 主模块
// const echarts = require('echarts/lib/echarts')
// // 引入柱状图
// require('echarts/lib/chart/bar')
// // 引入提示框和标题组件
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')

// require('echarts/lib/chart/pie')
import { debounce } from '@/utils/common.js'
import echarts from 'echarts'
export default {
  name: 'BaseEcharts',
  props: {
    id: {
      type: String,
      default: ''
    },
    option: {
      type: Object,
      default: function() {
        return {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    },
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: '500px'
    },
    mapJSON: {
      type: Object,
      default() {
        return {}
      }
    },
    isMap: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      baseCharts: null
    }
  },
  created() {
    this.reSizeECharts()
  },
  mounted() {
    if (this.isMap) {
      echarts.registerMap('GZ', this.mapJSON)
    }
    if (this.id === '') return
    // this.baseCharts = echarts.init(document.getElementById(this.id), {}, {
    //   width: this.width,
    //   height: this.height
    // })
    this.baseCharts = echarts.init(document.getElementById(this.id), {}, {
      width: this.width,
      height: this.height
    })
    // console.log(this.id, baseCharts)
    // console.log(this.option)
    // 添加echarts的配置文件：https://www.echartsjs.com/option.html#series-pie.legendHoverLink
    // 若是地图图表，注册地图
    this.baseCharts.setOption(this.option)
    this.reSizeECharts()
    // 防抖提升性能
    window.addEventListener('resize', debounce(this.reSizeECharts, 300))
  },
  methods: {
    // 刷新echart
    reLoadOption(option) {
      this.baseCharts.setOption(option)
    },
    // 修改echart的尺寸
    reSizeECharts(width, height) {
      if (!this.baseCharts) return
      this.baseCharts.resize()
      // this.baseCharts.resize(
      //   {
      //     width: width,
      //     height: height
      //   }
      // )
    }
  }

}
</script>

<style lang="scss">
.base-echarts {

}
</style>
