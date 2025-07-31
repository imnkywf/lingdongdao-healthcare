import React, { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

// nutui
import { Button, ConfigProvider, Tabbar } from '@nutui/nutui-react-taro'
import { Cart, HeartFill, Heart, Hi, Home, Order, User } from '@nutui/icons-react-taro'
import { IconFont } from '@nutui/icons-react-taro'

// 组件
import HomeComponent from '../../components/Home'
import UserComponent from '../../components/User'
import ShopComponent from '../../components/Shop'
import WeightServiceComponent from '../../components/WeightService'
import DiscoveryComponent from '../../components/Discovery'

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

      <div className="custom-tabbar">
        <div className="tabbar-center-bg"></div>
        <Tabbar
          activeColor='#4ACFFF'
          active={active}
          onSwitch={handleSwitchTab}>
          <Tabbar.Item title="首页" icon={<Home />} />
          <Tabbar.Item title="购物" icon={<Cart />} />
          <Tabbar.Item title={<View style={{ fontSize: '12px' }}>体重服务</View>} icon={<Order />} />
          <Tabbar.Item title="发现" icon={<Heart />} />
          <Tabbar.Item title="我的" icon={<User />} />
        </Tabbar>
      </div>

    </ConfigProvider>
  )
}

export default Index
