import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { Button, ConfigProvider, TextArea, Dialog } from '@nutui/nutui-react-taro'
import { Feedback, Retweet } from '@nutui/icons-react-taro'

import './index.scss'
import RateCard from '../../components/Home/RateCard/index'
import HealthRecord from '../../components/Home/HealthRecord/index'
import MyApp from '../../components/Home/MyApp/index'

function Index() {

  const [nickname, setNickname] = useState('')

  useEffect(() => {
    setNickname('张三')
  }, [])

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

       {/* 健康记录 */}
       <HealthRecord />


       <View style={{ height: '100px' }}></View>

     </View>

     <custom-tab-bar ></custom-tab-bar>
   </View>
  )
}

export default Index
