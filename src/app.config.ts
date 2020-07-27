export default {
  pages: [
    'pages/index/index',
    'pages/login/login',
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
      pagePath: "pages/login/login",
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
