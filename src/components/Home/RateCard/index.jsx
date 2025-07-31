import { useRef, useMemo } from 'react'
import { View, Text } from '@tarojs/components'
import { CircleProgress, ConfigProvider } from '@nutui/nutui-react-taro'
import { Add } from '@nutui/icons-react-taro'

import './index.scss'

export default function RateCard() {
  const bmi = 20 // 示例BMI值，你可以根据实际数据调整
  const containerRef = useRef(null)

  // 根据BMI值计算颜色和百分比
  const { color, percent: circlePercent, title } = useMemo(() => {
    if (bmi < 18.5) {
      return { title: '偏瘦', color: '#87CEEB', percent: (bmi / 18.5) * 100 } // 浅蓝色 - 偏瘦
    } else if (bmi >= 18.5 && bmi < 25) {
      return { title: '正常', color: '#90EE90', percent: ((bmi - 18.5) / (25 - 18.5)) * 100 } // 浅绿色 - 正常
    } else if (bmi >= 25 && bmi < 30) {
      return { title: '超重', color: '#FFD700', percent: ((bmi - 25) / (30 - 25)) * 100 } // 黄色 - 超重
    } else if (bmi >= 30 && bmi < 40) {
      return { title: '肥胖', color: '#FFA500', percent: ((bmi - 30) / (40 - 30)) * 100 } // 橙色 - 肥胖
    } else {
      return { title: '极度肥胖', color: '#FF0000', percent: 100 } // 红色 - 极度肥胖
    }
  }, [bmi])

  return (
    <View className="health-rate-card">

      {/* 添加小图标  */}
      <View style={{ width: '25px', height: '25px', position: 'absolute', top: '10px', right: '10px', border: "1px solid #fff", borderRadius: "50%", backgroundColor: 'rgba(255,255,255,0.2)' }}>
        <Add style={{ width: '25px', height: '25px', color: 'white', borderRadius: "50%" }} />
      </View>

      {/* 添加提醒  */}
      <View style={{
        padding: '5px 10px', position: 'absolute', top: '10px', right: '45px', border: "1px solid #fff", borderRadius: "10px", backgroundColor: 'rgba(255,255,255,0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{ fontSize: '12px', color: '#fff' }}>
          今日还未打卡哦!
        </Text>
      </View>


      {/* 数据展示 */}
      <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <View style={{ width: '50%' }}>
          <CircleProgress
            style={{ width: '150px', height: '150px' }}
            strokeWidth={10}
            clockwise={false}
            percent={circlePercent}
            color={color}
          >
            <View className="circle-content" style={{ color: '#eee' }}>
              <View className="circle-value" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                <View>
                  <Text style={{ fontSize: '24px' }}>{bmi.toFixed(1)}</Text>
                  <Text style={{ fontSize: '20px' }}>BMI</Text>
                </View>

              </View>
              <View style={{ fontSize: '14px' }}>{title}</View>
            </View>
          </CircleProgress>
        </View>

        <View style={{ width: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>

          <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#eee', gap: '20px' }}>
            <View style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <View style={{ fontSize: '16px' }}>
                体重
              </View>
              <View style={{ fontSize: '14px' }}>
                65.0Kg
              </View>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <View style={{ fontSize: '16px' }}>
                体脂率
              </View>
              <View style={{ fontSize: '14px' }}>
                20.0%
              </View>
            </View>

          </View>

          <View style={{ fontSize: '16px', color: '#e3e3e3' }}>2025/07/31 14:26</View>

        </View>

      </View>

      {/* 对比 */}
      <View style={{ marginTop: '15px', width: 'auto', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '10px', padding: '10px'
        , display: 'flex',flexDirection:'column', gap:'10px'
      }}>
        
        <View style={{ fontSize: '14px', color: '#e3e3e3' }}>
          与前一天对比：
        </View>

        <View style={{ display: 'flex', gap: '5px', justifyContent:'space-between', alignItems:'center' }}>
          <View style={{ fontSize: '14px', color: '#e3e3e3' }}>
            体重：-1.2kg
          </View>
          <View style={{ fontSize: '14px', color: '#F2F0F0' }}>|</View>
          <View style={{ fontSize: '14px', color: '#e3e3e3' }}>
            体脂率：-1.2%
          </View>
          <View style={{ fontSize: '14px', color: '#F2F0F0' }}>|</View>
          <View style={{ fontSize: '14px', color: '#e3e3e3' }}>
            BMI：1.2%
          </View>
        </View>
      </View>

    </View>
  )
}