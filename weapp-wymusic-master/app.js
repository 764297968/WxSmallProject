//app.js
App({
  onLaunch: function () {
    if (!wx.getStorageSync('favlist')) {
      wx.setStorageSync('favlist', {
        '我喜欢的音乐': {
          picurl: '',
          list: []
        }
      });
    }
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
    userInfo: null,
    navigation: [
      {
        text: "推荐音乐",
        name: "recommend"
      },
      {
        text: "热歌榜",
        name: "husband"
      },
      {
        text: "搜索",
        name: "search"
      }
    ],
    api: {
      sapiurl: "http://s.music.163.com",
      mapiurl: " http://music.163.com/api",
      //apiurl:"http://1x687f9296.iok.la",
      apiurl: "http://music.163.com/api",
      searchurl: "/search/get",
      newsonurl: "/personalized/newsong",
      detailurl: "/v3/playlist/detail",
      playerurl:"/song/enhance/player/url",
    }
  },
  ajax(model) {
    wx.showLoading({
      title: '加载中',
    })
    //拼接url  
    model.url = model.url;
    //get参数拼接  
    if (model.method == "get" && model.data !== undefined) {
      for (let k in model.data) {
        if (model.data[k].toString() !== '') {
          model.url = model.url + "?br=128000&" + k + "=" + model.data[k];
        }
      }
      model.data = '';
    }
    //返回Promise对象  
    return new Promise(
      function (resolve) {
        wx.request({
          method: model.method,
          url: model.url,
          data: model.data,
          dataType: model.dataType ? null : model.dataType,
          success: (res) => {
            wx.hideLoading()
            if (res.statusCode == 200) {
              console.log(res.data);
              resolve(res.data);
            } else {
              //错误信息处理  
              wx.showModal({
                title: '提示',
                content: '服务器错误，请联系客服',
                showCancel: false,
              })
            }
          }
        })
      }
    )
  },  
})