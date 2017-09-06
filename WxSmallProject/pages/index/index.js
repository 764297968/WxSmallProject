//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '点击此处进入小程序',
    userInfo: {},
    news:"去看商品"
     
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindtapmunu:function(){
    wx.navigateTo({
      url:"../menu/menu"
    })

  },
  bindtapnews:function(){
    wx.navigateTo({
          url:"../ProductShow/ProductShow"
        })
  },
  onLoad: function () {
    //console.log(data.motto);
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(userInfo)
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
