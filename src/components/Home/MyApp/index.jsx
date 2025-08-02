import { View, Text } from '@tarojs/components'
import { Feedback, Retweet, Scan, Search } from '@nutui/icons-react-taro'

import './index.scss'

const apps = [
    {
        name: '体重记录',
        icon: <Feedback size={20}/>,
        path: '/pages/weight/index'
    },
    {
        name: '体重趋势',
        icon: <Retweet size={20}/>,
        path: '/pages/weight/index'
    },
    {
        name: '热量查询',
        icon: <Search size={20}/>,
        path: '/pages/weight/index'
    },
    {
        name: '拍照识别',
        icon: <Scan size={20}/>,
        path: '/pages/weight/index'
    },
]

export default function MyApp() {
    return (
        <View className="apps-section">
            <View className="apps-title">我的应用</View>
          
            <View className="apps-grid">
                {
                    apps.map((app, index) => {
                        return (
                            <View className="app-card">
                                <View className="app-icon">
                                    {app.icon}
                                </View>
                                <View className="app-name">{app.name}</View>
                            </View>
                        )
                    })
                }
            </View>
        </View>

    )
}
