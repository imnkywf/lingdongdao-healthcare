import React, { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import { usePullDownRefresh, stopPullDownRefresh } from '@tarojs/taro'
import LineChart from "../../components/LineChart";
import './index.scss'
import { Card } from '@nutui/nutui-react-taro'


export default function ShopComponent() {
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState([])

  const state = {
    src: 'https://img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title:
      '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDescription: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  }

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

    setTimeout(() => {
      stopPullDownRefresh()
    }, 1000)

    //   stopPullDownRefresh()

    // loadData().then(() => {
    //   // 停止下拉刷新动画
    // })
  })

  return (
    <View className="shop-container">

      <View className='shop-header'>
        <View className='shop-header-title'>有赞商城</View>
      </View>

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
        <Card
          src={state.src}
          title={state.title}
          price={state.price}
          shopDescription={state.shopDescription}
          delivery={state.delivery}
        />
      </View>

      {/* <LineChart /> */}

      <custom-tab-bar></custom-tab-bar>
    </View>
  )
}
