import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Button, ConfigProvider, Tabbar } from '@nutui/nutui-react-taro'
import './index.scss'

import { Cart, HeartFill, Heart, Hi, Home, User } from '@nutui/icons-react-taro'

function Index() {

  const [active, setActive] = useState(0)

  const [avatar, setAvatar] = useState("")
  const [nickname, setNickname] = useState("")

  // 切换 Tabbar
  const handleSwitchTab = (item) => {
    console.log(item)
    setActive(item)
  }

  // 登录授权处理
  const handleLogin = () => {
    wx.login({
      success: (res) => {
        if (res.code) {
          console.log('登录成功', res.code)

          // 将 code 发送到你的后端
          Taro.request({
            url: 'https://your-server.com/api/wechat-login',
            method: 'POST',
            data: { code: res.code },
            success: (res) => {
              console.log('后端返回:', res.data)
              // 这里的 res.data.openid 就是用户唯一ID
            },
            fail: (err) => {
              console.error('请求后端失败', err)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      },
      fail: (err) => {
        console.log('调用 wx.login 失败', err)
      }
    })
  }


  const handleFetchInfo = () => {
    // 调用微信 API 获取用户信息
    wx.getUserInfo({
      success: (res) => {
        console.log('用户信息', res)
        setNickname(res.userInfo.nickName)
        setAvatar(res.userInfo.avatarUrl)
      },
      fail: (err) => {
        console.log('获取用户信息失败', err)
      }
    })
  }

  return (
    <ConfigProvider theme={{}}>

      <View>

        {active === 0 && <View>首页</View>}
        {active === 1 && <View>2</View>}
        {active === 2 && <View>3</View>}
        {active === 3 && <View>4</View>}

        {/* 点击按钮触发登录授权 */}
        <Button type='primary' onClick={handleFetchInfo}>获取信息</Button>
        <button open-type="chooseAvatar" onChooseAvatar={e => setAvatar(e.detail.avatarUrl)
        }>选择头像</button>
        <img src={avatar} alt="" />
        <input placeholder='请输入昵称' value={nickname} type="nickname" onInput={e => setNickname(e.detail.value)}>bbb</input>



      </View>

      <div style={{ position: 'fixed', bottom: '5px', width: '100%', zIndex: 999 }}>
        <Tabbar
          activeColor='pink'
          active={active}
          onSwitch={handleSwitchTab}>
          <Tabbar.Item title="首页" icon={<Home />} />
          <Tabbar.Item title="体重服务" />
          <Tabbar.Item title="分类" />
          <Tabbar.Item title="我的" />
        </Tabbar>
      </div>

    </ConfigProvider>
  )
}

export default Index
