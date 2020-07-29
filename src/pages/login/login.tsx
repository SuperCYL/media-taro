import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtForm, AtInput, AtButton } from 'taro-ui'

import './login.scss'

export default class Login extends Component {
  constructor() {
    super(null)
    this.state = {
      value: ''
    }
  }
  handleChange(value) {
    this.setState({
      value
    })
  }
  onSubmit(event) {
    console.log(this.state['value'])
  }
  onReset(event) {
    this.setState({
      value: '',
    })
  }
  render() {
    return (
      <AtForm
        onSubmit={this.onSubmit.bind(this)}
        onReset={this.onReset.bind(this)}
      >
        <AtInput
          name='value'
          title='文本'
          type='text'
          placeholder='单行文本'
          value={this.state['value']}
          onChange={this.handleChange.bind(this, 'value')}
        />
        <AtButton type="primary" formType='submit'>提交</AtButton>
        <AtButton type="primary" formType='reset'>重置</AtButton>
      </AtForm>
    )
  }
}