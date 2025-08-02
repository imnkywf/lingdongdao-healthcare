import React, { useState } from 'react'
import { View, Text, Input, Avatar } from '@tarojs/components'
import './index.scss'



export default function EditProfilePage() {
  const [avatar, setAvatar] = useState("https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132")
  const [nickname, setNickname] = useState("")
  
  // 处理头像选择
  const handleChooseAvatar = (e) => {
    setAvatar(e.detail.avatarUrl)
  }

  const handleNicknameChange = (e) => {
    setNickname(e)
  }

  return (
    <View>
      <View className="avatar-section">
        <button
          className="avatar-button"
          open-type="chooseAvatar"
          onChooseAvatar={handleChooseAvatar}
        >
          <Avatar
            size="large"
            src={avatar || 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'}
          />
        </button>
        <Text className="avatar-hint">点击更换头像</Text>
      </View>

      <View className="user-details">
        <Input
          className="nickname-input"
          placeholder="请输入昵称"
          value={nickname}
          type="nickname"
          onChange={handleNicknameChange}
        />
      </View>
    </View>
  )
}
