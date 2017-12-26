var app = getApp()
var util = require('../../../../util/util.js')
//var dataUrl = "http://m10.music.126.net/20170914114545/7e0b6434b2b40b28af0340b3ccaf9074/ymusic/001e/4e55/b800/73391c91c0c046e18d01489d3de1f5bb.mp3"


var dataUrl = "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46"
Page({
    onLoad: function () {
        this._enableInterval()

        if (app.globalData.backgroundAudioPlaying) {
            this.setData({
                playing: true
            })
        }
    },
    data: {
        playing: false,
        playTime: 0,
        formatedPlayTime: '00:00:00'
    },
    play: function (res) {
        var that = this
        wx.playBackgroundAudio({
            dataUrl: dataUrl,
            title: '此时此刻',
            coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
            complete: function (res) {
                that.setData({
                    playing: true
                })
            }
        })
        this._enableInterval()
        app.globalData.backgroundAudioPlaying = true
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
    pause: function () {
        var that = this
        wx.pauseBackgroundAudio({
            dataUrl: dataUrl,
            success: function () {
                that.setData({
                    playing: false
                })
            }
        })
        app.globalData.backgroundAudioPlaying = false
    },
    stop: function () {
        var that = this
        wx.stopBackgroundAudio({
            dataUrl: dataUrl,
            success: function (res) {
                that.setData({
                    playing: false,
                    playTime: 0,
                    formatedPlayTime: util.formatTime(0)
                })
            }
        })
        app.globalData.backgroundAudioPlaying = false
    },
    _enableInterval: function () {
        var that = this
        update()
        this.updateInterval = setInterval(update, 500)
        function update() {
            wx.getBackgroundAudioPlayerState({
                success: function (res) {
                    that.setData({
                        duration: res.duration,
                        playTime: res.currentPosition,
                        formatedPlayTime: util.formatTime(res.currentPosition + 1)
                    })
                }
            })
        }
    },
    onUnload: function () {
        clearInterval(this.updateInterval)
    }
})
