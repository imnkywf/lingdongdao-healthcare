import React, { useState } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { Button, Cell, CellGroup, Avatar, Input, Divider } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import './index.scss'

export default function UserComponent() {
  const [avatar, setAvatar] = useState("https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132")
  const [nickname, setNickname] = useState("微信用户")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // 登录授权处理
  const handleLogin = () => {
    Taro.navigateTo({
      url: '/pages/login/index'
    })
  }

  const handleChooseAvatar = (e) => {
    setAvatar(e.detail.avatarUrl)
  }

  const menuItems = [
    { title: '我的订单', path: '/pages/orders/index' },
    { title: '家庭成员', path: '/pages/orders/index' },
    { title: '健康档案', path: '/pages/health/index' },
    { title: '体重记录', path: '/pages/weight/index' },
    { title: '设置', path: '/pages/settings/index' },
    { title: '帮助中心', path: '/pages/help/index' },
    { title: '关于我们', path: '/pages/about/index' }
  ]

  const handleMenuClick = (item) => {
    Taro.showToast({
      title: `点击了${item.title}`,
      icon: 'none'
    })
  }

  return (
    <View>
      <View className="user-container">
        {/* 用户信息卡片 */}
        <View className="user-card">
          <View className="user-info">
            <View className="avatar-section">
              <Avatar
                size="large"
                src={avatar || 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'}
              />
            </View>

            <View className="user-details">
              {isLoggedIn ? <Text>{nickname}</Text> : <Text style={{ color: '#999' }}>您还未登录！</Text>}
            </View>
          </View>

          {!isLoggedIn && (
            <View className="login-section">
              <Button
                type="primary"
                onClick={handleLogin}
                className="login-button"
              >
                点击登录
              </Button>
            </View>
          )}
        </View>

        {/* 功能菜单 */}
        <View className="menu-section">
          <CellGroup>
            {menuItems.map((item, index) => (
              <Cell
                key={index}
                title={item.title}
                isLink
                onClick={() => handleMenuClick(item)}
                className="menu-item"
              />
            ))}
          </CellGroup>
        </View>

        {/* 退出登录 */}
        {isLoggedIn && (
          <View className="logout-section">
            <Button
              type="danger"
              className="logout-button"
              onClick={() => {
                setIsLoggedIn(false)
                setAvatar("")
                setNickname("")
                Taro.showToast({
                  title: '已退出登录',
                  icon: 'success'
                })
              }}
            >
              退出登录
            </Button>
          </View>
        )}
      </View>
      <custom-tab-bar active={4}></custom-tab-bar>
    </View>
  )
}
