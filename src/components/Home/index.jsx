import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { Button, ConfigProvider, TextArea, Dialog } from '@nutui/nutui-react-taro'

import './index.scss'
import RateCard from './RateCard/index'

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

      <RateCard />

    </View>
  )
}

export default Index
