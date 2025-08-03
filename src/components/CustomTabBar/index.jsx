import { View } from "@tarojs/components";
import { Tabbar } from "@nutui/nutui-react-taro";
import { Cart, Heart, Home, Order, User } from "@nutui/icons-react-taro";
import React, { useState, useEffect } from "react";
import Taro from '@tarojs/taro';
import './index.scss';
import { themes } from '../../utils/theme'; // 确保路径正确

const CustomTabBar = () => {
  const [active, setActive] = useState(0);
  const [theme, setTheme] = useState(Taro.getStorageSync('theme') || 'light');

  // TabBar 路由配置
  const pagesUrl = [
    '/pages/home/index',
    '/pages/shop/index',
    '/pages/weightService/index',
    '/pages/discovery/index',
    '/pages/user/index',
  ];

  // 监听主题变化事件
  useEffect(() => {
    const handleThemeChange = (newTheme) => {
      setTheme(newTheme);
    };
    Taro.eventCenter.on('themeChanged', handleThemeChange);
    return () => Taro.eventCenter.off('themeChanged', handleThemeChange);
  }, []);

  // 初始化时设置当前活跃 Tab
  useEffect(() => {
    const currentRoute = Taro.getCurrentInstance().router?.path;
    if (currentRoute) {
      const index = pagesUrl.findIndex(url => currentRoute.startsWith(url));
      if (index !== -1) setActive(index);
    }
  }, []);

  // 切换 Tab
  const handleSwitchTab = (index) => {
    Taro.switchTab({ url: pagesUrl[index] });
  };

  return (
    <View className="custom-tabbar" style={{ backgroundColor: themes[theme].tabbarBg }}>
      <View className="tabbar-center-bg" style={{ backgroundColor: themes[theme].tabbarBg }}></View>

      <Tabbar
        activeColor={themes[theme].tabbarActiveColor}
        inactiveColor={themes[theme].tabbarInactiveColor}
        style={{ backgroundColor: themes[theme].tabbarBg }}
        value={active}
        onSwitch={handleSwitchTab}
      >
        <Tabbar.Item title="首页" icon={<Home />} />
        <Tabbar.Item title="购物" icon={<Cart />} />
        <Tabbar.Item
          title={<View style={{ fontSize: '12px' }}>体重服务</View>}
          icon={<Order />}
        />
        <Tabbar.Item title="发现" icon={<Heart />} />
        <Tabbar.Item title="我的" icon={<User />} />
      </Tabbar>
    </View>
  );
};

export default CustomTabBar;