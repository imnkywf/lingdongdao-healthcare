import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Tabs } from '@nutui/nutui-react-taro'

export default function WeightServiceComponent() {
  const [tabvalue, setTabvalue] = useState('0')

  return (
    <View>
      <Tabs
        value={tabvalue}
        onChange={(value) => {
          setTabvalue(value)
        }}
        align="left"
      >
        <Tabs.TabPane title="新闻"> Tab longitem </Tabs.TabPane>
        <Tabs.TabPane title="发现"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="广场"> Tab 3 </Tabs.TabPane>
      </Tabs>
      <custom-tab-bar active={3}></custom-tab-bar>
    </View>
  )
}
