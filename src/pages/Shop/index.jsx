import React, { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import { usePullDownRefresh, stopPullDownRefresh } from '@tarojs/taro'
import LineChart from "../../components/LineChart";
import './index.scss'

export default function ShopComponent() {
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState([])

  // 模拟数据加载函数
  const loadData = async () => {
    setRefreshing(true)
    try {
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 这里可以添加实际的数据获取逻辑
      const mockData = [
        { id: 1, name: '商品1', price: 99 },
        { id: 2, name: '商品2', price: 199 },
        { id: 3, name: '商品3', price: 299 }
      ]
      setData(mockData)
      console.log('数据刷新成功')
    } catch (error) {
      console.error('数据刷新失败:', error)
    } finally {
      setRefreshing(false)
    }
  }

  // 初始化加载数据
  useEffect(() => {
    loadData()
  }, [])

  // 下拉刷新处理
  usePullDownRefresh(() => {
    console.log('下拉刷新')

    setData(p => p.map(e => ({...e, price: e.price + 1})))
    //   stopPullDownRefresh()

    // loadData().then(() => {
    //   // 停止下拉刷新动画
    // })
  })

  return (
    <View className="shop-container">

      {/* 显示刷新状态 */}
      {refreshing && (
        <View className="loading-container">
          <View className="dot dot1"></View> 
          <View className="d ot dot2"></View>
          <View className="dot dot3"></View>
          <View className="loading-text">正在刷新...</View>
        </View>
      )}

      {/* 显示商品列表 */}
      <View className="product-grid">
        {data.map(item => ( 
          <View key={item.id} className="product-card">
            <View className="product-name">{item.name}</View>
            <View className="product-price">
              <View className="price-symbol">¥</View>
              {item.price}
            </View>
          </View>
        ))}
      </View>

      {/* <LineChart /> */}

      <custom-tab-bar></custom-tab-bar>
    </View>
  )
}
