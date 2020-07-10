// 饼状图
const peiEcharts = {
  title: {
    text: '男女比例',
    // subtext: '纯属虚构'
    // x: 'center'
    textStyle: {
      fontWeight: 'normal',
      fontSize: '13'
    },
    top: '20',
    left: '20'
  },
  // 刻印文字
  legend: {
    orient: 'vertical',
    right: '50px',
    top: '120px',
    data: ['女', '男']
  },
  // 鼠标悬浮提示
  tooltip: {
    trigger: 'item',
    formatter: '{a} ---<br/>{b} : {c} ({d}%)'
  },
  series: [
    {
      name: '男女比例',
      type: 'pie',
      radius: '70%',
      center: ['48%', '50%'],
      data: [
        {
          value: 20,
          name: '女',
          itemStyle: {
            color: '#FFC400'
          }
        },
        {
          value: 70,
          name: '男',
          itemStyle: {
            color: '#4880FF'
          }
        }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}

// 柱状图1
const bar1Echarts = {
  title: {
    text: '罪名分布',
    // subtext: '纯属虚构'
    // x: 'center'
    textStyle: {
      fontWeight: 'normal',
      fontSize: '13'
    },
    top: '20',
    left: '20'
  },
  tooltip: {},
  xAxis: {
    data: ['走私罪', '盗窃罪', '金融诈骗罪', '故意伤害罪', '抢劫罪', '其他'],
    axisLabel: {
      interval: 0,
      margin: 15,
      fontSize: 12
    }
  },
  yAxis: {},
  series: [
    {
      name: '罪名',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
      barWidth: 20,
      itemStyle: {
        normal: {
          color: '#FFC400'
        }
      }
    }
  ]
}
// 柱状图2
const bar2Echarts = {
  title: {
    // text: 'ECharts 入门示例'
  },
  legend: {},
  tooltip: {},
  dataset: {
    // 提供一份数据。
    source: [
      ['product', '2015', '2016'],
      ['Matcha Latte', 43.3, 85.8],
      ['Milk Tea', 83.1, 73.4],
      ['Cheese Cocoa1', 86.4, 65.2],
      ['Cheese Cocoa2', 86.4, 65.2],
      ['Cheese Cocoa3', 86.4, 65.2],
      ['Cheese Cocoa4', 86.4, 65.2],
      ['Cheese Cocoa5', 86.4, 65.2],
      ['Walnut Brownie', 72.4, 53.9]
    ]
  },
  // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
  xAxis: {
    type: 'category',
    name: 'x坐标'
  },
  // 声明一个 Y 轴，数值轴。
  yAxis: {
    name: 'y坐标',
    splitNumber: 5,
    max: 200, // y轴最大值
    splitLine: {
      show: false // 隐藏y轴的分割线
    }
  },
  // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
  series: [
    {
      type: 'bar',
      barWidth: '24px',
      itemStyle: {
        color: '#4880FF'
      }
    },
    {
      type: 'bar',
      barWidth: '24px',
      itemStyle: {
        color: '#F88B30'
      }

    }
  ]
}

// 柱状图 3
const bar3Echarts = {
  title: {
    text: 'ECharts 入门示例'
  },
  legend: {},
  tooltip: {},
  // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
  xAxis: {
    type: 'category',
    name: 'x坐标',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  // 声明一个 Y 轴，数值轴。
  yAxis: {
    name: 'y坐标',
    splitNumber: 5,
    max: 200, // y轴最大值
    splitLine: {
      show: false // 隐藏y轴的分割线
    }
  },
  // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
  series: [
    {
      type: 'bar',
      barWidth: '15px',
      itemStyle: {
        color: '#FFC400'
      },
      data: [100, 70, 130, 180, 80, 100, 110]
    },
    {
      type: 'bar',
      barWidth: '15px',
      itemStyle: {
        color: '#F88B30'
      },
      data: [20, 90, 150, 110, 40, 10, 100]

    },
    {
      type: 'bar',
      barWidth: '15px',
      itemStyle: {
        color: '#5E98FB'
      },
      data: [110, 100, 110, 20, 90, 190, 130]

    },
    {
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#F76B1C'
      },
      lineStyle: {
        width: 3
      },
      data: [60, 200, 190, 60, 50, 90, 120]
    }
  ]
}

// 圆环 4
const circleEcharts = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    right: '30px',
    top: '80px',
    data: ['直接访问', '邮件营销', '联盟广告']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['50%', '70%'],
      center: ['40%', '50%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '30',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {
          value: 335,
          name: '直接访问',
          itemStyle: {
            color: '#4880FF'
          }
        },
        {
          value: 310,
          name: '邮件营销',
          itemStyle: {
            color: '#F88B30'
          }
        },
        {
          value: 234,
          name: '联盟广告',
          itemStyle: {
            color: '#FFC400'
          }
        }
      ]
    }
  ]
}

// 折线图 1 条
const soomthLine = {
  title: {
    // text: 'ECharts 入门示例'
  },
  legend: {},
  tooltip: {},
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line',
    smooth: true
  }]
}
// 折线图 2 条
const soomthLine2 = {
  title: {
    // text: 'ECharts 入门示例'
  },
  legend: {},
  tooltip: {},
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    splitNumber: 5,
    max: 500, // y轴最大值
    splitLine: {
      show: false // 隐藏y轴的分割线
    }
  },
  series: [
    {
      data: [220, 332, 101, 234, 290, 330, 320],
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 3,
        color: '#5E98FB'
      }
    },
    {
      data: [20, 32, 10, 34, 90, 30, 120],
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 3,
        color: '#7ED321'
      }
    }
  ]
}
// 折线图 3 条
const soomthLine3 = {
  title: {
    text: 'ECharts 入门示例'
  },
  legend: {
    data: ['name1', 'name2', 'name3']
  },
  tooltip: {},
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    splitNumber: 5,
    max: 500, // y轴最大值
    splitLine: {
      show: false // 隐藏y轴的分割线
    }
  },
  series: [
    {
      data: [220, 332, 101, 234, 290, 330, 320],
      name: 'name1',
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 3,
        color: '#5E98FB'
      }
    },
    {
      data: [20, 32, 10, 34, 90, 30, 120],
      type: 'line',
      name: 'name2',
      smooth: true,
      lineStyle: {
        width: 3,
        color: '#7ED321'
      }
    },
    {
      data: [60, 120, 110, 304, 190, 340, 220],
      type: 'line',
      name: 'name3',
      smooth: true,
      lineStyle: {
        width: 3,
        color: '#F88B30'
      }
    }
  ]
}

// https://www.echartsjs.com/option.html#series-pie.legendHoverLink
const EChartsType = {
  peiEcharts,
  bar1Echarts,
  bar2Echarts,
  bar3Echarts,
  soomthLine,
  soomthLine2,
  soomthLine3,
  circleEcharts
}

export default EChartsType
