import React, { Component } from 'react'
import Taro from '@tarojs/taro'

import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './login.scss'

export default class Login extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  gototest() {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }

  render() {
    return (
      <View className='login'>
        <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle={true} onClick={this.gototest.bind(this)}>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle={true}>来</AtButton>
      </View>
    )
  }
}
