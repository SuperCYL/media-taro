import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import { getVerificationCode } from '@/api/user'

import './login.scss'

export default class Login extends Component {
  constructor() {
    super(null)
    this.state = {
      mobile: String,
      pwd: ''
    }
  }
  componentDidMount() {
    getVerificationCode().then(res => {
      console.log('getVerificationCode', res);

    })
  }
  handleChange(value) {
    console.log('handleChange', value);

    this.setState({
      value
    })
  }
  onSubmit(event) {
    console.log(this.state['mobile'])
  }
  gototest() {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }
  render() {
    return (
      <AtForm
        onSubmit={this.onSubmit.bind(this)}
      >
        <AtInput
          name='mobile'
          title='手机号'
          type='text'
          placeholder='mobile'
          value={this.state['mobile']}
          onChange={this.handleChange.bind(this, '')}
        />
        <AtInput
          name='pwd'
          title='验证码'
          type='text'
          placeholder='pwd'
          value={this.state['pwd']}
          onChange={this.handleChange.bind(this, '')}
        />
        <AtButton type="primary" formType='submit' onClick={this.gototest.bind(this)}>提交</AtButton>

      </AtForm>
    )
  }
}