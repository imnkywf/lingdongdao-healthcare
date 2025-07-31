import React, { useState } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { Button, Cell, CellGroup, Avatar, Input, Divider } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import './index.scss'

export default function UserComponent() {
    const [avatar, setAvatar] = useState("")
    const [nickname, setNickname] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // 登录授权处理
    const handleLogin = () => {
        wx.login({
            success: (res) => {
                if (res.code) {
                    console.log('登录成功', res.code)
                    setIsLoggedIn(true)

                    // 将 code 发送到你的后端
                    Taro.request({
                        url: 'https://your-server.com/api/wechat-login',
                        method: 'POST',
                        data: { code: res.code },
                        success: (res) => {
                            console.log('后端返回:', res.data)
                            // 这里的 res.data.openid 就是用户唯一ID


                        },
                        fail: (err) => {
                            console.error('请求后端失败', err)
                        }
                    })
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            },
            fail: (err) => {
                console.log('调用 wx.login 失败', err)
            }
        })
    }

    const handleFetchInfo = () => {
        // 调用微信 API 获取用户信息
        wx.getUserInfo({
            success: (res) => {
                console.log('用户信息', res)
                setNickname(res.userInfo.nickName)
                setAvatar(res.userInfo.avatarUrl)
            },
            fail: (err) => {
                console.log('获取用户信息失败', err)
            }
        })
    }

    const handleChooseAvatar = (e) => {
        setAvatar(e.detail.avatarUrl)
    }

    const handleNicknameChange = (e) => {
        setNickname(e.detail.value)
    }

    const menuItems = [
        { title: '我的订单', path: '/pages/orders/index' },
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
        <View className="user-container">
            {/* 用户信息卡片 */}
            <View className="user-card">
                <View className="user-info">
                    <View className="avatar-section">
                        <button
                            className="avatar-button"
                            open-type="chooseAvatar"
                            onChooseAvatar={handleChooseAvatar}
                        >
                            <Avatar
                                size="large"
                                src={avatar || 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'}
                            />
                        </button>
                        <Text className="avatar-hint">点击更换头像</Text>
                    </View>

                    <View className="user-details">
                        <Input
                            className="nickname-input"
                            placeholder="请输入昵称"
                            value={nickname}
                            type="nickname"
                            onInput={handleNicknameChange}
                        />
                        <Text className="user-id">用户ID: 888888</Text>
                    </View>
                </View>

                {!isLoggedIn && (
                    <View className="login-section">
                        <Button
                            type="primary"
                            onClick={handleLogin}
                            className="login-button"
                        >
                            微信登录
                        </Button>
                        <Button
                            type="default"
                            onClick={handleFetchInfo}
                            className="fetch-info-button"
                        >
                            获取用户信息
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
    )
}
