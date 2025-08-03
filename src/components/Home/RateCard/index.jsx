import { useRef, useMemo, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { CircleProgress } from '@nutui/nutui-react-taro'
import { Add } from '@nutui/icons-react-taro'
import './index.scss'
import { themes } from '../../../utils/theme.js'
import Taro from '@tarojs/taro'

export default function RateCard() {

  const bmi = 20
  const containerRef = useRef(null)
  const [theme, setTheme] = useState(Taro.getStorageSync('theme') || 'light')

  const { color, percent: circlePercent, title } = useMemo(() => {
    if (bmi < 18.5) {
      return { title: '偏瘦', color: '#87CEEB', percent: (bmi / 18.5) * 100 }
    } else if (bmi >= 18.5 && bmi < 25) {
      return { title: '正常', color: '#90EE90', percent: ((bmi - 18.5) / (25 - 18.5)) * 100 }
    } else if (bmi >= 25 && bmi < 30) {
      return { title: '超重', color: '#FFD700', percent: ((bmi - 25) / (30 - 25)) * 100 }
    } else if (bmi >= 30 && bmi < 40) {
      return { title: '肥胖', color: '#FFA500', percent: ((bmi - 30) / (40 - 30)) * 100 }
    } else {
      return { title: '极度肥胖', color: '#FF0000', percent: 100 }
    }
  }, [bmi])

  return (
    <View className="health-rate-card" style={{ backgroundColor: themes[theme].ratecardBg }}>
      <View className="rate-add-btn">
        <Add className="rate-add-icon" />
      </View>

      <View className="rate-reminder">
        <Text className="reminder-text">今日还未打卡哦!</Text>
      </View>

      <View className="rate-main">
        <View className="rate-circle">
          <CircleProgress
            style={{ width: '125px', height: '125px' }}
            strokeWidth={10}
            clockwise={false}
            percent={circlePercent}
            color={color}
          >
            <View className="circle-content">
              <View className="circle-value">
                <View>
                  <Text className="bmi-value">{bmi.toFixed(1)}</Text>
                  <Text className="bmi-label"> BMI</Text>
                </View>
              </View>
              <View className="bmi-status">{title}</View>
            </View>
          </CircleProgress>
        </View>

        <View className="rate-stats">
          <View className="stats-row">
            <View className="stat-item">
              <View className="stat-label">体重</View>
              <View className="stat-value">65.0Kg</View>
            </View>
            <View className="stat-item">
              <View className="stat-label">体脂率</View>
              <View className="stat-value">20.0%</View>
            </View>
          </View>
          <View className="stats-time">2025/07/31 14:26</View>
        </View>
      </View>

      <View className="rate-compare">
        <View className="compare-title">与前一天对比：</View>
        <View className="compare-values">
          <View className="compare-item">体重：-1.2kg</View>
          <View className="compare-divider">|</View>
          <View className="compare-item">体脂率：-1.2%</View>
          <View className="compare-divider">|</View>
          <View className="compare-item">BMI：1.2%</View>
        </View>
      </View>
    </View>
  )
}
