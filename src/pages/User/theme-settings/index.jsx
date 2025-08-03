import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { themes } from '../../../utils/theme'
import './index.scss'

const ThemeSettings = () => {
  const [currentTheme, setCurrentTheme] = useState('light')

  // 初始化当前主题
  useEffect(() => {
    const savedTheme = Taro.getStorageSync('theme') || 'light'
    setCurrentTheme(savedTheme)
  }, [])

  // 切换主题
  const switchTheme = (themeName) => {
    setCurrentTheme(themeName);
    Taro.setStorageSync('theme', themeName);
    
    // 触发全局主题变化事件
    Taro.eventCenter.trigger('themeChanged', themeName);
    
    Taro.showToast({
      title: `已切换到${themeName === 'light' ? '浅色' : '深色'}主题`,
      icon: 'success',
      duration: 1500
    });
  };

  return (
    <View className="theme-settings">
      <View className="header">
        <Text className="title">主题设置</Text>
        <Text className="subtitle">选择你喜欢的主题风格</Text>
      </View>

      <View className="theme-options">
        {/* Light Theme */}
        <View 
          className={`theme-card ${currentTheme === 'light' ? 'active' : ''}`}
          onClick={() => switchTheme('light')}
        >
          <View className="theme-preview light-preview">
            <View className="preview-header">
              <View className="preview-dot"></View>
              <View className="preview-dot"></View>
              <View className="preview-dot"></View>
            </View>
            <View className="preview-content">
              <View className="preview-bar"></View>
              <View className="preview-bar short"></View>
              <View className="preview-bar"></View>
            </View>
          </View>
          <View className="theme-info">
            <Text className="theme-name">浅色主题</Text>
            <Text className="theme-desc">明亮清爽，适合白天使用</Text>
          </View>
          {currentTheme === 'light' && (
            <View className="active-indicator">
              <Text className="check-icon">✓</Text>
            </View>
          )}
        </View>

        {/* Dark Theme */}
        <View 
          className={`theme-card ${currentTheme === 'dark' ? 'active' : ''}`}
          onClick={() => switchTheme('dark')}
        >
          <View className="theme-preview dark-preview">
            <View className="preview-header">
              <View className="preview-dot"></View>
              <View className="preview-dot"></View>
              <View className="preview-dot"></View>
            </View>
            <View className="preview-content">
              <View className="preview-bar"></View>
              <View className="preview-bar short"></View>
              <View className="preview-bar"></View>
            </View>
          </View>
          <View className="theme-info">
            <Text className="theme-name">深色主题</Text>
            <Text className="theme-desc">护眼舒适，适合夜间使用</Text>
          </View>
          {currentTheme === 'dark' && (
            <View className="active-indicator">
              <Text className="check-icon">✓</Text>
            </View>
          )}
        </View>
      </View>

    </View>
  )
}

export default ThemeSettings