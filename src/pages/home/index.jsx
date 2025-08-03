import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { Button, ConfigProvider, TextArea, Dialog } from '@nutui/nutui-react-taro'
import { Feedback, Retweet } from '@nutui/icons-react-taro'
import Taro, { useDidShow } from '@tarojs/taro'

import './index.scss'
import RateCard from '../../components/Home/RateCard/index'
import HealthRecord from '../../components/Home/HealthRecord/index'
import MyApp from '../../components/Home/MyApp/index'


function Index() {

  const [nickname, setNickname] = useState('')
  const [theme, setTheme] = useState(Taro.getStorageSync('theme') || 'light')

  useEffect(() => {
    setNickname('张三')
  }, [])

  useDidShow(() => {
    setTheme(Taro.getStorageSync('theme') || 'light')
  })

  useEffect(() => {
    // 触发全局主题变化事件
    Taro.eventCenter.trigger('themeChanged', theme);
  }, [theme])

  return (
    <View>
      <View className="home-container" >

        <View className="welcom-message">
          <Text>下午好, {nickname}</Text>
        </View>

        {/* 健康数据卡片 */}
        <RateCard />

        {/* 我的应用 */}
        <MyApp />

        {/* 健康数据 */}
        <HealthRecord />


        <View style={{ height: '100px' }}></View>

      </View>

      <custom-tab-bar></custom-tab-bar>
    </View>
  )
}

export default Index
