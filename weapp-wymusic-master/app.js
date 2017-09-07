//app.js
App({
    onLaunch: function() {
        if (!wx.getStorageSync('favlist')) {
            wx.setStorageSync('favlist', {
                '我喜欢的音乐': {
                    picurl: '',
                    list: []
                }
            });
        }
    },
    getUserInfo: function(cb) {
        var that = this
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.login({
                success: function() {
                    wx.getUserInfo({
                        success: function(res) {
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
        navigation:[
          {
            text:"推荐音乐",
            name:"recommend"
          },
          {
            text: "热歌榜",
            name: "husband"
          },
          {
            text: "搜索",
            name: "search"
          }
        ]
    }
})