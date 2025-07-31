import Taro, { useReady } from '@tarojs/taro'
import { View, Canvas } from '@tarojs/components'
import './index.scss'

export default function BmiGaugeCard({
  value = 65.0,
  unit = 'kg',
  time = '2025/07/31 14:26',
}) {
  useReady(() => {
    const query = Taro.createSelectorQuery()
    query.select('#bmiGaugeCanvas')
      .fields({ node: true, size: true })
      .exec(res => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')

        const dpr = Taro.getSystemInfoSync().pixelRatio || 1
        const width = 240
        const height = 130
        canvas.width = width * dpr
        canvas.height = height * dpr
        ctx.scale(dpr, dpr) // ✅ 关键：缩放 context 使绘制变高清

        const centerX = width / 2 - 10
        const centerY = height - 30
        const radius = centerX - 30
        const percent = Math.min(value / 100, 1)
        const angleStart = Math.PI
        const angleEnd = Math.PI + Math.PI * percent

        ctx.clearRect(0, 0, width, height)

        // 背景弧
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, Math.PI, 0)
        ctx.strokeStyle = '#eee'
        ctx.lineWidth = 12
        ctx.stroke()

        // 彩色进度弧
        const gradient = ctx.createLinearGradient(0, 0, width, 0)
        gradient.addColorStop(0, '#58D9F9')
        gradient.addColorStop(0.5, '#7CFFCB')
        gradient.addColorStop(1, '#FDDD60')

        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, angleStart, angleEnd)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 12
        ctx.lineCap = 'round'
        ctx.stroke()

        // 指针（三角形）
        const px = centerX + radius * Math.cos(angleEnd)
        const py = centerY + radius * Math.sin(angleEnd)

        ctx.beginPath()
        ctx.moveTo(px, py)
        ctx.lineTo(px - 10, py - 6)
        ctx.lineTo(px - 10, py + 6)
        ctx.closePath()
        ctx.fillStyle = '#fff'
        ctx.fill()

        // 数值
        ctx.font = 'bold 28px sans-serif'
        ctx.fillStyle = '#fff'
        ctx.textAlign = 'center'
        ctx.fillText(`${value.toFixed(1)}`, centerX - 5, centerY - 35)

        // 单位
        ctx.font = '14px sans-serif'
        ctx.fillStyle = '#ccc'
        ctx.fillText(unit, centerX + 40, centerY -35)

        // 时间
        ctx.font = '14px sans-serif'
        ctx.fillStyle = '#ccc'
        ctx.fillText(time, centerX, centerY - 5)
      })
  })

  return (
    <View className='bmi-card' style={{padding: '10px 0' }}>
      <Canvas
        type='2d'
        id='bmiGaugeCanvas'
        canvasId='bmiGaugeCanvas'
        style={{ width: '240px', height: '130px' }}
      />
    </View>
  )
}
