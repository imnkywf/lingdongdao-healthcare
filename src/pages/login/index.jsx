import React, { useState } from 'react'
import { View, Button, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [phoneNumber, setPhoneNumber] = useState('')

    // 获取手机号
    const getPhoneNumber = (e) => {
        console.log('getPhoneNumber', e)

        if (e.detail.errMsg === 'getPhoneNumber:ok') {
            // 用户同意授权
            const { code } = e.detail

            // 发送 code 到后端换取手机号
            Taro.request({
                url: 'YOUR_API_URL/getPhoneNumber',
                method: 'POST',
                data: {
                    code: code
                },
                success: (res) => {
                    if (res.data.success) {
                        const phone = res.data.phoneNumber
                        setPhoneNumber(phone)
                        console.log('获取到手机号:', phone)

                        // 保存手机号到本地存储
                        Taro.setStorageSync('phoneNumber', phone)

                        // 可以在这里进行登录逻辑
                        handleLogin(phone)
                    }
                },
                fail: (err) => {
                    console.error('获取手机号失败:', err)
                    Taro.showToast({
                        title: '获取手机号失败',
                        icon: 'none'
                    })
                }
            })
        } else {
            // 用户拒绝授权
            Taro.showToast({
                title: '需要授权手机号才能登录',
                icon: 'none'
            })
        }
    }

    // 登录授权处理
    const handleLogin = () => {
        setIsLoading(true)

    
        // wx.login({
        //     success: (res) => {
        //         if (res.code) {
        //             console.log('登录成功', res.code)
        //             setIsLoggedIn(true)

        //             // 将 code 发送到你的后端
        //             Taro.request({
        //                 url: 'https://your-server.com/api/wechat-login',
        //                 method: 'POST',
        //                 data: { code: res.code },
        //                 success: (res) => {
        //                     console.log('后端返回:', res.data)
        //                     // 这里的 res.data.openid 就是用户唯一ID
        //                     Taro.showToast({
        //                         title: '登录成功',
        //                         icon: 'success',
        //                         duration: 2000
        //                     })
        //                 },
        //                 fail: (err) => {
        //                     console.error('请求后端失败', err)
        //                     Taro.showToast({
        //                         title: '登录失败',
        //                         icon: 'error',
        //                         duration: 2000
        //                     })
        //                 }
        //             })
        //         } else {
        //             console.log('登录失败！' + res.errMsg)
        //             Taro.showToast({
        //                 title: '登录失败',
        //                 icon: 'error',
        //                 duration: 2000
        //             })
        //         }
        //     },
        //     fail: (err) => {
        //         console.log('调用 wx.login 失败', err)
        //         Taro.showToast({
        //             title: '登录失败',
        //             icon: 'error',
        //             duration: 2000
        //         })
        //     },
        //     complete: () => {
        //         setIsLoading(false)
        //     }
        // })
    }

    return (
        <View className="login-container">

            <View className="login-header">
                灵动岛

                <View>
                    健康管理
                </View>
            </View>

            <View className="login-content">
                <View className="welcome-text">
                    <Text className="welcome-title">欢迎使用</Text>
                    <Text className="welcome-desc">请使用手机号快速登录</Text>
                </View>

                <View className="login-form">
                    <Button
                        className={`login-button ${isLoading ? 'loading' : ''}`}
                        onClick={handleLogin}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <View className="loading-content">
                                <View className="loading-dots">
                                    <View className="dot"></View>
                                    <View className="dot"></View>
                                    <View className="dot"></View>
                                </View>
                                <Text>登录中...</Text>
                            </View>
                        ) : (
                            <View className="button-content">
                                <Text>手机一键登录</Text>
                            </View>
                        )}
                    </Button>

                    <View className="privacy-notice">
                        <Text className="privacy-text">
                            登录即表示同意
                            <Text className="privacy-link">《用户协议》</Text>
                            和
                            <Text className="privacy-link">《隐私政策》</Text>
                        </Text>
                    </View>
                </View>
            </View>

            <View className="login-footer">
                <Text className="footer-text">安全可靠的健康管理平台</Text>
            </View>
        </View>
    )
}
