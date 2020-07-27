import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { AtNavBar } from 'taro-ui'

import './index.scss'

import api from '../../service/api'


export default class Index extends Component {

  componentWillMount() {
    api.get('news/list', '')
  }
  componentDidMount() { }

  componentWillUnmount() { }

  componentDidHide() { }
  gototest() {
    Taro.navigateTo({
      url: '/pages/test/index'
    })
  }
  render() {
    return (
      <View className='index'>
        <AtButton type='primary' onClick={this.gototest.bind(this)} circle={true}>跳转test</AtButton>
      </View>
    )
  }
}
