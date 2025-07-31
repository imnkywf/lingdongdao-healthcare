import { View, Text } from '@tarojs/components'
import { Feedback, Retweet } from '@nutui/icons-react-taro'

import './index.scss'

export default function MyApp() {
    return (
        <View className="apps-section">
            <View className="apps-title">我的应用</View>
            <View style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '5px' }}>
                <Text style={{ color: '#589eff' }}>全部应用{'>'}</Text>
            </View>
            <View className="apps-grid">
                <View className="app-card">
                    <View className="app-icon">
                        <Feedback size={30} />
                    </View>
                    <View className="app-name">体重记录</View>
                </View>
                <View className="app-card">
                    <View className="app-icon">
                        <Retweet size={30} />
                    </View>
                    <View className="app-name">体重趋势</View>
                </View>
            </View>
        </View>

    )
}
