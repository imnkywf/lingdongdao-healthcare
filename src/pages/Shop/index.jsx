import React from 'react'
import {View} from '@tarojs/components'
import EchartsIndex from "../../components/echarts";

export default function ShopComponent() {
  return (
    <View>
      <EchartsIndex></EchartsIndex>
      <EchartsIndex></EchartsIndex>
      <View>ShopComponent</View>

      <custom-tab-bar ></custom-tab-bar>
    </View>
  )
}
