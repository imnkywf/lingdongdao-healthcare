import React, { useCallback } from 'react'
import { View } from '@tarojs/components'
import * as echarts from '../../custom-ec-canvas/ec-canvas/echarts'

export default function EchartsIndex() {
  const onInit = useCallback((canvas, width, height, dpr) => {
    console.log('ECharts 初始化开始', { canvas, width, height, dpr });

    const chart = echarts.init(canvas, null, {
      width: width,
      height: height,
      devicePixelRatio: dpr
    })

    // 示例图表配置
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          barWidth: '60%'
        }
      ]
    }

    chart.setOption(option)
    console.log('ECharts 图表设置完成');
    return chart
  }, [])

  const ec = {
    onInit: onInit
  }

  return (
    <View className="bar-chart" style={{ width: '100%', height: '300px' }}>
      <ec-canvas
        id="bar-canvas"
        canvas-id="bar-canvas"
        ec={ec}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  )
}
