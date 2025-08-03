import { View } from "@tarojs/components";
import { Tabbar, ConfigProvider } from "@nutui/nutui-react-taro";
import { Cart, Heart, Home, Order, User } from "@nutui/icons-react-taro";
import React, { useState, useEffect } from "react";
import Taro from '@tarojs/taro'
import './index.scss'
import { themes } from '../../utils/theme.js'

const CustomTabBar = (props) => {
  const [active, setActive] = useState(0) // 0:首页 1:购物 2:体重服务 3:发现 4:我的
  const [theme, setTheme] = useState(Taro.getStorageSync('theme') || 'light')

  const pagesUrl = [
    '/pages/home/index',
    '/pages/shop/index',
    '/pages/weightService/index',
    '/pages/discovery/index',
    '/pages/user/index',
  ]

  // 切换 Tabbar
  const handleSwitchTab = (item) => {
    Taro.switchTab({
      url: pagesUrl[item],
    }).then(() => {
      // 路由跳转成功后再更新状态
      // setActive(item);
    })
  }

  // 监听页面主动设置 tabbar 状态的事件
  useEffect(() => {

  }, []);

  // 根据当前路由自动设置 active 状态
  useEffect(() => {
    const updateActiveTab = () => {
      const currentRoute = Taro.getCurrentInstance().router?.path;
      console.log(currentRoute, 'currentRoute')
      if (currentRoute) {
        const index = pagesUrl.findIndex(url => currentRoute === url);
        if (index !== -1) {
          setActive(index);
        }
      }
    };

    updateActiveTab();

    // // 监听路由变化
    // const routerEvents = Taro.events;
    // routerEvents.on('routeChange', updateActiveTab);
    //
    // // 组件卸载时取消监听
    // return () => {
    //   routerEvents.off('routeChange', updateActiveTab);
    // };
  });

  return (

    <View>
      <div className="custom-tabbar">
        <div className="tabbar-center-bg"></div>
  
          <Tabbar
            activeColor={themes[theme].tabbarActiveColor}
            value={active}
            onSwitch={handleSwitchTab}>
            <Tabbar.Item title="首页" icon={<Home />} />
            <Tabbar.Item title="购物" icon={<Cart />} />
            <Tabbar.Item title={<View style={{ fontSize: '12px' }}>体重服务</View>} icon={<Order />} />
            <Tabbar.Item title="发现" icon={<Heart />} />
            <Tabbar.Item title="我的" icon={<User />} />
          </Tabbar>

      </div>
    </View>
  )
}

export default CustomTabBar
