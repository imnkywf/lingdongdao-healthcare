
export default defineAppConfig({
  usingComponents: {
    'ec-canvas': './custom-ec-canvas/ec-canvas/ec-canvas',
    'custom-tab-bar': './components/CustomTabBar/index'
  },
  pages: [
    'pages/index/index',
    'pages/Shop/index',
    'pages/Discovery/index',
    'pages/User/index',
    'pages/WeightService/index',
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
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/Shop/index',
        text: '购物车',
      },
      {
        pagePath: 'pages/WeightService/index',
        text: '体重服务',
      },
      {
        pagePath: 'pages/Discovery/index',
        text: '发现',
      },
      {
        pagePath: 'pages/User/index',
        text: '我的',
      }
    ]
  }
})
