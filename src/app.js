import React, { useEffect } from 'react'
import { useDidShow, useDidHide } from '@tarojs/taro'
import Taro from '@tarojs/taro'
// 全局样式
import './app.scss'

function App(props) {

  // 设置主题
  useEffect(() => {
    Taro.setStorageSync('theme', Taro.getStorageSync('theme') || 'light')
  }, [])

  // 对应 onShow
  useDidShow(() => { })

  // 对应 onHide
  useDidHide(() => { })

  return props.children
}

export default App
