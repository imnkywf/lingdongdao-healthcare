import React from 'react'
import {View} from '@tarojs/components'
import LineChart from "../../components/LineChart";

export default function ShopComponent() {
  return (
    <View>
      <LineChart/>
      <View>ShopComponent</View>

      <custom-tab-bar ></custom-tab-bar>
    </View>
  )
}
