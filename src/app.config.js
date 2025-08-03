
export default defineAppConfig({
  usingComponents: {
    'ec-canvas': './custom-ec-canvas/ec-canvas/ec-canvas',
    'custom-tab-bar': './components/CustomTabBar/index'
  },
  pages: [
    'pages/home/index',
    'pages/shop/index',
    'pages/discovery/index',
    'pages/user/index',
    'pages/weightService/index',
    'pages/login/index',
    'pages/edit-profile/index',
    'pages/home/scan/index',
    'pages/user/theme-settings/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#333',
    selectedColor: '#333',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
      },
      {
        pagePath: 'pages/shop/index',
        text: '购物车',
      },
      {
        pagePath: 'pages/weightService/index',
        text: '体重服务',
      },
      {
        pagePath: 'pages/discovery/index',
        text: '发现',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
      }
    ]
  }
})
