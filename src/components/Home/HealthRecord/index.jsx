import React from 'react'
import { View, Text } from '@tarojs/components'
import { CircleProgress } from '@nutui/nutui-react-taro'
import { Add } from '@nutui/icons-react-taro'

import './index.scss'

export default function HealthRecord() {
    const calorieIntake = 2000
    const calorieTarget = 40000
    const exerciseConsumed = 51331
    const exerciseTarget = 500

    // 计算总进度百分比
    const totalProgress = ((calorieIntake + exerciseConsumed) / (calorieTarget + exerciseTarget)) * 100

    return (
        <View className="health-record-container">
            <View className="header-section">
                <Text className="health-record-title">健康数据</Text>
                <View className="overview-btn">
                    <Text className="overview-text">数据总览</Text>
                    <Text className="overview-arrow">{'>'}</Text>
                </View>
            </View>

            <View className="health-record">

                <View className="health-record-title">
                </View>
                {/* 头部 */}
                <View className="header">
                    <Text className="title">饮食运动管理</Text>
                    <View className="diet-plan-btn">
                        <Text>饮食计划</Text>
                    </View>
                </View>

                {/* 主要内容区域 */}
                <View className="main-content">
                    {/* 左侧数据区域 */}
                    <View className="data-section">
                        {/* 饮食摄入 */}
                        <View className="data-row">
                            <View className="data-dot intake-dot"></View>
                            <Text className="data-label">饮食摄入</Text>
                            <Text className="data-value">{calorieIntake} / {calorieTarget} 大卡</Text>
                        </View>

                        {/* 运动消耗 */}
                        <View className="data-row">
                            <View className="data-dot exercise-dot"></View>
                            <Text className="data-label">运动消耗</Text>
                            <Text className="data-value">{exerciseConsumed} / {exerciseTarget} 大卡</Text>
                        </View>
                    </View>

                    {/* 右侧圆形进度 */}
                    <View className="progress-section">
                        <CircleProgress
                            style={{ width: '80px', height: '80px' }}
                            strokeWidth={8}
                            percent={totalProgress}
                            color={totalProgress.toFixed(1) > 100 ? '#1677FF' : 'orange'}
                        >
                            <View className="progress-content">
                                <Text className="progress-text">今日进度</Text>
                                <Text className="progress-percent">{totalProgress.toFixed(1)}%</Text>
                            </View>
                        </CircleProgress>
                    </View>
                </View>

                {/* 底部活动图标 */}
                <View className="activity-icons">
                    <View className="activity-item">
                        <View className="activity-icon breakfast">
                            <Text>🍞</Text>
                        </View>
                        <Text className="activity-label">早餐</Text>
                        <View className="add-btn">
                            <Add />
                        </View>
                    </View>

                    <View className="activity-item">
                        <View className="activity-icon lunch">
                            <Text>🍜</Text>
                        </View>
                        <Text className="activity-label">午餐</Text>
                        <View className="add-btn">
                            <Add />
                        </View>
                    </View>

                    <View className="activity-item">
                        <View className="activity-icon dinner">
                            <Text>🍔</Text>
                        </View>
                        <Text className="activity-label">晚餐</Text>
                        <View className="add-btn">
                            <Add />
                        </View>
                    </View>

                    <View className="activity-item">
                        <View className="activity-icon snack">
                            <Text>🍎</Text>
                        </View>
                        <Text className="activity-label">加餐</Text>
                        <View className="add-btn">
                            <Add />
                        </View>
                    </View>

                    <View className="activity-item">
                        <View className="activity-icon exercise">
                            <Text>🏀</Text>
                        </View>
                        <Text className="activity-label">运动</Text>
                        <View className="add-btn">
                            <Add />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}