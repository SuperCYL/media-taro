import { Component } from 'react'
import './app.scss'

class App extends Component {
  state={
    List:[]
  }
  config = {
    pages: [
      'pages/login/login',
      'pages/index/index',
      'pages/test/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    navigationStyle: 'default',
    tabBar: {
      list:this.state.List,
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: '#ccc'
    }
  }
  componentDidMount() { 
    this.setState({
      List: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "",
        selectedIconPath: ""
      }, {
        pagePath: "pages/test/index",
        text: "登录",
        iconPath: "",
        selectedIconPath: ""
      }]
    })
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
