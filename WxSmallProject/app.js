//app.js
var picture = [];
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  },

  addPicture: function (data) {
    if (picture.length == 0) {
      picture = data;
    } else {
      for (var i = 0; i < data.length; i++) {
        picture.push(data[i]);
      }
    }
  },
  getPicture: function () {
    return picture;
  },
  getRequest: function (url, data_, result) {
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: data_,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        result.call(this, res);
      }
    })
  },
  Request:function(option,result)
  {
    wx.request({
      url: option.url,
      data:option.data,
      method:option.method,
      success:function(res){
        option.success=res;
      }
    })
  }
})