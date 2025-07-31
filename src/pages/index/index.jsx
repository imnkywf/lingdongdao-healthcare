import React, { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

// nutui
import { Button, ConfigProvider, Tabbar } from '@nutui/nutui-react-taro'
import { Cart, HeartFill, Heart, Hi, Home, User } from '@nutui/icons-react-taro'

// 组件
import HomeComponent from '../../compoents/home'
import UserComponent from '../../compoents/user'
import ShopComponent from '../../compoents/shop'
import WeightServiceComponent from '../../compoents/weightService'
import DiscoveryComponent from '../../compoents/discovery'

function Index() {

  const [active, setActive] = useState(0) // 0:首页 1:购物 2:体重服务 3:发现 4:我的

  // 页面标题配置
  const pageTitles = ['首页', '购物', '体重服务', '发现', '我的']

  // 切换 Tabbar
  const handleSwitchTab = (item) => {
    console.log(item)
    setActive(item)
  }

  // 根据当前激活的Tab更新导航栏标题
  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: pageTitles[active]
    })
  }, [active])

  return (
    <ConfigProvider theme={{}}>

      <View>

        {active === 0 && <HomeComponent />}
        {active === 1 && <ShopComponent />}
        {active === 2 && <WeightServiceComponent />}
        {active === 3 && <DiscoveryComponent />}
        {active === 4 && <UserComponent />}

      </View>

      <div style={{ position: 'fixed', bottom: '5px', width: '100%', zIndex: 999 }}>
        <Tabbar
          activeColor='pink'
          active={active}
          onSwitch={handleSwitchTab}>
          <Tabbar.Item title="首页" icon={<Home />} />
          <Tabbar.Item title="购物" />
          <Tabbar.Item title="体重服务" />
          <Tabbar.Item title="发现" />
          <Tabbar.Item title="我的" />
        </Tabbar>
      </div>

    </ConfigProvider>
  )
}

export default Index
