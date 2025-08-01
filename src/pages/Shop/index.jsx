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

    setData(p => p.map(e => ({ ...e, price: e.price + 1 })))
    stopPullDownRefresh()

    // loadData().then(() => {
    //   // 停止下拉刷新动画
    // })
  })

  return (
    <View>

      {/* 显示商品列表 */}
      <View style={{ padding: '10px' }}>
        {data.map(item => (
          <View key={item.id} style={{
            padding: '10px',
            margin: '5px 0',
            border: '1px solid #eee',
            borderRadius: '5px'
          }}>
            <View>{item.name}</View>
            <View style={{ color: '#f00' }}>¥{item.price}</View>
          </View>
        ))}
      </View>

      <LineChart />

      <custom-tab-bar></custom-tab-bar>
    </View>
  )
}
