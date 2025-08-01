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

    // 折线图配置
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line'  // 更适合折线图的指示器类型
        }
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLine: {
          lineStyle: {
            color: '#999'  // X轴颜色
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999'  // Y轴颜色
          }
        },
        splitLine: {
          lineStyle: {
            type: 'dashed'  // 虚线网格
          }
        }
      },
      series: [
        {
          name: '数据量',
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',  // 修改为折线图
          smooth: true,   // 平滑曲线
          symbol: 'circle',  // 数据点样式
          symbolSize: 8,    // 数据点大小
          lineStyle: {
            width: 4,       // 线宽
            color: '#5470c6' // 线条颜色
          },
          itemStyle: {
            color: '#5470c6', // 数据点颜色
            borderWidth: 2,
            borderColor: '#fff'
          },
          areaStyle: {       // 区域填充
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(84, 112, 198, 0.5)' },
              { offset: 1, color: 'rgba(84, 112, 198, 0.1)' }
            ])
          }
        }
      ],
      grid: {
        containLabel: true,
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '10%'
      }
    }

    chart.setOption(option)
    console.log('折线图设置完成');
    return chart
  }, [])

  const ec = {
    onInit: onInit
  }

  return (
    <View className="line-chart" style={{ width: '100%', height: '300px' }}>
      <ec-canvas
        id="line-canvas"
        canvas-id="line-canvas"
        ec={ec}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  )
}