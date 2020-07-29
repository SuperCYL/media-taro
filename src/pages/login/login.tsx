import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import { getVerificationCode } from '@/api/user'

import './login.scss'

export default class Login extends Component {
  componentDidMount() {
    // 接口请求示例
    // getVerificationCode('18069423612').then(res => {
    //   console.log('getVerificationCode', res);
    // })
  }

  changeVal() { }

  render() {
    return (
      <AtForm>
        <AtInput name="mobile" onChange={this.changeVal}></AtInput>
        <AtButton type="primary">btn</AtButton>
      </AtForm>
    )
  }
}