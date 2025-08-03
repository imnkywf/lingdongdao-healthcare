import React, { useState } from 'react'
import { View, Button, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
import { Scan as ScanIcon } from '@nutui/icons-react-taro'

const Scan = () => {
  const [imageUrl, setImageUrl] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [foodInfo, setFoodInfo] = useState(null)

  // 拍照或选择图片
  const takePhoto = () => {
    Taro.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['camera', 'album'], // 支持拍照和相册选择
      camera: 'back', // 默认后置摄像头
      success: (res) => {
        const tempFilePath = res.tempFiles[0].tempFilePath
        setImageUrl(tempFilePath)
        console.log('选择的图片:', tempFilePath)

        // 自动分析图片
        analyzeFood(tempFilePath)
      },
      fail: (err) => {
        console.error('选择图片失败:', err)
        Taro.showToast({
          title: '选择图片失败',
          icon: 'none'
        })
      }
    })
  }

  // 分析食物图片
  const analyzeFood = (imagePath) => {
    setIsAnalyzing(true)

    // 模拟分析过程（实际项目中需要调用后端API）
    setTimeout(() => {
      // 模拟返回的食物信息
      const mockFoodInfo = {
        name: '苹果',
        calories: 52,
        protein: 0.3,
        fat: 0.2,
        carbs: 14,
        fiber: 2.4,
        vitaminC: 4.6
      }

      setFoodInfo(mockFoodInfo)
      setIsAnalyzing(false)

      Taro.showToast({
        title: '分析完成',
        icon: 'success'
      })
    }, 2000) // 模拟2秒分析时间

    // 实际项目中的API调用代码：
    /*
    Taro.uploadFile({
      url: 'YOUR_API_URL/analyzeFood',
      filePath: imagePath,
      name: 'image',
      success: (res) => {
        const data = JSON.parse(res.data)
        if (data.success) {
          setFoodInfo(data.foodInfo)
          Taro.showToast({
            title: '分析完成',
            icon: 'success'
          })
        } else {
          Taro.showToast({
            title: data.message || '分析失败',
            icon: 'none'
          })
        }
      },
      fail: (err) => {
        console.error('上传失败:', err)
        Taro.showToast({
          title: '网络错误',
          icon: 'none'
        })
      },
      complete: () => {
        setIsAnalyzing(false)
      }
    })
    */
  }

  // 重新拍照
  const retakePhoto = () => {
    setImageUrl('')
    setFoodInfo(null)
  }

  return (
    <View className="scan-container">
      <View className="scan-title">食物热量查询</View>

      {!imageUrl ? (
        <View className="camera-area">
          <View className="camera-placeholder">
            <View className="camera-icon"><ScanIcon size={60} /></View>
            <View className="camera-text">点击拍照或选择图片</View>
            <View className="camera-subtext">识别食物并获取营养信息</View>
          </View>
          <View className="camera-button" onClick={takePhoto}>
            开始拍照
          </View>
        </View>
      ) : (
        <View className="result-area">
          <View className="image-container">
            <Image
              src={imageUrl}
              className="food-image"
              mode="aspectFit"
            />
            <Button
              className="retake-button"
              onClick={retakePhoto}
            >
              重新拍照
            </Button>
          </View>

          {isAnalyzing && (
            <View className="analyzing">
              <View className="loading-spinner"></View>
              <View className="loading-text">正在分析食物...</View>
            </View>
          )}

          {foodInfo && (
            <View className="food-info">
              <View className="food-header">
                <View className="food-name">{foodInfo.name}</View>
                <View className="food-icon">🍎</View>
              </View>

              <View className="calories-card">
                <View className="calories-number">{foodInfo.calories}</View>
                <View className="calories-unit">千卡</View>
              </View>

              <View className="nutrition-grid">
                <View className="nutrition-item">
                  <View className="nutrition-label">蛋白质</View>
                  <View className="nutrition-value">{foodInfo.protein}g</View>
                </View>
                <View className="nutrition-item">
                  <View className="nutrition-label">脂肪</View>
                  <View className="nutrition-value">{foodInfo.fat}g</View>
                </View>
                <View className="nutrition-item">
                  <View className="nutrition-label">碳水化合物</View>
                  <View className="nutrition-value">{foodInfo.carbs}g</View>
                </View>
                <View className="nutrition-item">
                  <View className="nutrition-label">膳食纤维</View>
                  <View className="nutrition-value">{foodInfo.fiber}g</View>
                </View>
              </View>

              <View className="vitamin-info">
                <View className="vitamin-label">维生素C</View>
                <View className="vitamin-value">{foodInfo.vitaminC}mg</View>
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  )
}

export default Scan