// pages/playsong/index.js
var util=require("../../utils/util.js");
var $ = getApp();
var apiurl = $.globalData.api; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toastHidden: true,
    song: {}, 
    playing:false,
    playTime: 0,
    favHidden: true,
    formatedPlayTime: '00:00:00'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (param) {
    var that = this;
    var song = that.data.song;//data[id] || {};
    this.setData({
      currentId: param.id
    })
    Object.assign(song, wx.getStorageSync(param.id.toString()));
    $.ajax({
      url: apiurl.apiurl + apiurl.playerurl,
      data: {
        ids: "[" + param.id + "]",
        br: song.h.br
      },
      method: "get",
    }).then(function (res) {
      Object.assign(song, res.data[0]);
      that.play(song);
    })
    this.idsMap = wx.getStorageSync('ids') || {};
    this.idsArr = Object.keys(this.idsMap);
   that.setData({
     song:song
   })
   // this._enableInterval()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this;
    $.ajax({
      url: apiurl.apiurl + apiurl.lyricurl,
      data: {
        id: this.data.currentId,
        lv: 0,
        tv: 0
      },
      method: "get",
    }).then(function (res) {
      Object.assign(that.data.song, res);
    })
  },
   play: function (song) {
    var that = this;
    console.log(song.url);
    wx.playBackgroundAudio({
      dataUrl: song.url,
      title: song.name,
      coverImgUrl: song.al.pic ? song.al.pic : song.album.picId_str, 
      complete: function (res) {
        console.log(res);
        that.setData({
          playing: true,
          durationText: util.formatTime(song.duration/1000)
        })
      }
    })
    this._enableInterval()
   // app.globalData.backgroundAudioPlaying = true
  },
   _enableInterval: function () {
     var that = this
     update()
     this.updateInterval = setInterval(update, 1000)
     function update() {
       
       wx.getBackgroundAudioPlayerState({
         success: function (res) {
           that.setData({
             playTime: Math.floor(res.currentPosition / (that.data.song.duration / 100000)),
             formatedPlayTime: util.formatTime(res.currentPosition + 1),
           })
         }
       })
     }
   },
   seek: function (e) {
     clearInterval(this.updateInterval)
     var that = this
     wx.seekBackgroundAudio({
       position: e.detail.value,
       complete: function () {
         // 实际会延迟两秒左右才跳过去
         setTimeout(function () {
           that._enableInterval()
         }, 2000)
       }
     })
   },

})