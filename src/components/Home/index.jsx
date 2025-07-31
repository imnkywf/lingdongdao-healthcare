import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { Button, ConfigProvider, TextArea, Dialog } from '@nutui/nutui-react-taro'
import { Feedback, Retweet } from '@nutui/icons-react-taro'

import './index.scss'
import RateCard from './RateCard/index'
import HealthRecord from './HealthRecord/index'
import MyApp from './MyApp/index'

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

      {/* 健康数据卡片 */}
      <RateCard />

      {/* 我的应用 */}
      <MyApp />

      {/* 健康记录 */}
      <HealthRecord />


      <View style={{ height: '100px' }}></View>


    </View>
  )
}

export default Index
