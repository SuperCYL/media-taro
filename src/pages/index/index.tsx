import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { AtNavBar } from 'taro-ui'

import './index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  click() {
    Taro.navigateTo({
      url: '/pages/login/login'
    })
  }

  render() {
    return (
      <View className='index'>
        <AtNavBar
          color='#000'
          title='NavBar 导航栏示例'
          leftText='返回'
          rightFirstIconType='bullet-list'
          rightSecondIconType='user'
        />
        <Text >Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle={true}>支持</AtButton>
        <Text>共建？</Text>
        <AtButton onClick={this.click} type='secondary' circle={true}>跳到登录</AtButton>
      </View>
    )
  }
}
