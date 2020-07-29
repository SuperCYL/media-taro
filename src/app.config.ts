export default {
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
    list: [{
      pagePath: "pages/index/index",
      text: "首页",
      iconPath: "",
      selectedIconPath: ""
    }, {
      pagePath: "pages/test/index",
      text: "登录",
      iconPath: "",
      selectedIconPath: ""
    }],
    color: '#333',
    selectedColor: '#333',
    backgroundColor: '#fff',
    borderStyle: '#ccc'
  }
}
