import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { Button, ConfigProvider, TextArea, Dialog } from '@nutui/nutui-react-taro'
import { Add } from '@nutui/icons-react-taro'

import './index.scss'
import RateCard from './RateCard'

function Index() {

  const [nickname, setNickname] = useState('')

  useEffect(() => {
    setNickname('张三')
  }, [])

  return (
    <View className="home-container" >

      <View className="welcom-message">
        <Text>下午好, {nickname}</Text>
      </View>

      <View className="health-rate-card"
      >
        <View style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '5px' }}>
          <View style={{ color: '#eee', borderRadius: '5px', border: '1px solid #eee', backgroundColor: 'rgba(255,255,255,0.2)', padding: '2px 10px', fontSize: '8px', lineHeight: '15px' }} >
            今日还未打卡!
          </View>
          <View style={{ color: '#eee', borderRadius: '50%', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.2)' }} >
            <Add style={{ width: '20px', height: '20px' }} />
          </View>
        </View>


        <View style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>

          <View style={{ width: '50%', display: 'flex' }}>
            <RateCard value={22} label="BMI" unit="KG" color="#58D9F9" />
          </View>

          <View style={{ display: 'flex', justifyContent: 'space-around', width: '40%', fontSize: '15px', color: '#eee' }}>
            <View style={{ display: 'flex', width: 'auto', alignItems: 'center', flexDirection: 'column' }}>

              <Text>
                30
              </Text>
              <Text>
                健康评分
              </Text>

            </View>

            <View style={{ display: 'flex', width: '50%', alignItems: 'center', flexDirection: 'column' }}>
              <Text>
                30
              </Text>
              <Text>
                体脂率(%)
              </Text>

            </View>

          </View>

        </View>

      </View>

    </View>
  )
}

export default Index
