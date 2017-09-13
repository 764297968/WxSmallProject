var data = require('../../utils/data.js').songs;
var favUtil = require('../../utils/fav.js');
var strRe = /\[(\d{2}:\d{2})\.\d{2,}\](.*)/;
var $ = getApp();
var apiurl = $.globalData.api;
Page({
  data: {
    toastHidden: true,
    song: {},
  },
  onLoad: function (param) {
    var that = this;
    this.setData({
      currentId: param.id
    })
    $.ajax({
      url: apiurl.apiurl + apiurl.lyricurl,
      data: {
        id: param.id,
        lv: 0,
        tv: 0
      },
      method: "get",
    }).then(function (res) {
      Object.assign(that.data.song, res);
    })
    this.idsMap = wx.getStorageSync('ids') || {};
    this.idsArr = Object.keys(this.idsMap);
  },
  onReady: function () {
    this.reload(this.data.currentId);
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  onShow: function () {
    this.animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });
  },
  onHide: function () {
    this.clearTurner();
  },
  onUnload: function () {
    this.clearTurner();
  },
  errorEvent: function (e) {
    console.log("加载资源失败 code：", e.detail.errMsg);
    console.log(this.idsMap[Number(this.data.currentId)]);
    this.reload(this.idsMap[Number(this.data.currentId)].nextid);
  },
  prevEvent: function (e) {
    this.reload(this.idsMap[Number(this.data.currentId)].preid);
  },
  nextEvent: function (e) {
    this.reload(this.idsMap[Number(this.data.currentId)].nextid);
  },
  actionEvent: function (e) {
    var method = this.data.status === 'play' ? 'pause' : 'play';
    this.setData({
      status: method,
      action: {
        method: method
      }
    });

    if (method === 'pause') this.clearTurner();
  },
  switchModeEvent: function (e) {
    var newMode = 'loop';
    var toastMsg = "列表循环";
    if (this.data.mode === 'loop') {
      newMode = 'single';
      toastMsg = "单曲循环";
    } else if (this.data.mode === 'single') {
      newMode = 'random';
      toastMsg = "随机播放";
    }
    this.setData({
      mode: newMode,
      toastMsg: toastMsg,
      toastHidden: false
    })
  },
  switchbgEvent: function (e) {
    this.setData({
      lyricHidden: !this.data.lyricHidden
    });
  },
  favEvent: function (e) {
    if (this.data.fav === 'unlike') {
      this.setData({
        favHidden: false
      });
      return;
    }

    var id = this.data.currentId,
      fav = wx.getStorageSync('fav') || {},
      favName = fav[id],
      favlist = wx.getStorageSync('favlist') || {},
      favData = favlist[favName];

    delete fav[id];
    if (favData) {
      favData.list.splice(favData.list.indexOf(id), 1);

      if (favData.list.length) {
        favData.picurl = data[favData.list[favData.list.length - 1]].album.picUrl;
      } else {
        favData.picurl = '';
      }
    }

    wx.setStorageSync('fav', fav);
    wx.setStorageSync('favlist', favlist);

    this.setData({
      fav: 'unlike',
      favlist: favUtil.getFavList()
    });
  },
  addFavItem: function (e) {
    this.addFav(e.detail.value);
  },
  favItemTap: function (e) {
    this.addFav(e.currentTarget.dataset.name);
  },
  actionSheetChange: function (e) {
    this.setData({
      favHidden: true
    });
  },
  timeupdateEvent: function (e) {
    var t = e.detail.currentTime,
      d = e.detail.duration,
      step = this.isEnSong ? 78 : 55,
      list = this.data.lyricList,
      cIndex = this.data.currentIndex;

    if (cIndex < list.length - 1 && t >= list[cIndex + 1].time) {
      this.animation.translateY(-step * (cIndex + 1)).step();

      this.setData({
        currentTime: t,
        currentIndex: cIndex + 1,
        animationData: this.animation.export()
      });
    }
    // console.log(t / d * 100);
    // console.log(Math.ceil(t / d * 100))
    this.setData({
      per: Math.ceil(t / d * 100),
      timeText: this.formatTime(t),
      durationText: this.formatTime(d),
      durationNum:d
    });

    if (!this.turner && this.data.status === 'play') {
      this.turner = setInterval(() => {
        this.setData({
          deg: this.data.deg + 1,
        })
      }, 50);
    }
  },
  endEvent: function (e) {
    this.reload(this.getNextSongId());
  },
  toastChange: function (e) {
    this.setData({
      toastHidden: true
    });
  },
  reload: function (id) {
    var that = this;
    var song = that.data.song;//data[id] || {};
    Object.assign(song, wx.getStorageSync(id.toString()));
    that.clearTurner();
    that.animation.translateY(0).step({
      duration: 1000,
      delay: 100
    });
    $.ajax({
      url: apiurl.apiurl + apiurl.playerurl,
      data: {
        ids: "[" + id + "]",
        br: song.h.br
      },
      method: "get",
    }).then(function (res) {
      Object.assign(song, res.data[0]);
      that.setData({
        per: 0,
        deg: 0,
        status: 'play',
        lyricHidden: true,
        toastHidden: true,
        favHidden: true,
        fav: wx.getStorageSync('fav')[id] ? 'liked' : 'unlike',
        mode: that.data.mode || 'loop',
        currentId: id,
        currentTime: '0',
        currentIndex: -1,
        timeText: '00:00',
        durationText: '00:00',
        animationData: that.animation.export(),
        title: song.name,
        picurl: song.al.picUrl,
        src: song.url,
        picId_str: song.al.pic ? song.al.pic:song.album.picId_str,
        action: {
          method: 'setCurrentTime',
          data: 0
        },
        lyricList: that.getLyricList(song),
        favlist: favUtil.getFavList()
      });
      var mp3url = $.checkStorage(id + "mp3");
      if (!mp3url)
      {
        wx.downloadFile({
          url: song.url,
          success: function (res) {
            console.log('downloadFile success, res is', res)
            $.setStorage(id + "mp3", res.tempFilePath)
          },
          fail: function (errMsg) {
            console.log('downloadFile fail, err is:', errMsg)
          }
        })
      }else{
        that.setData({
          src:mp3url
        });
      }
      wx.setNavigationBarTitle({
        title: song.name
      });
      // wx.playBackgroundAudio({
      //   dataUrl: that.data.src,
      //   title: song.name,
      //   coverImgUrl: song.al.picUrl,
      //   success: function (res) {
      //     console.log(res);
      //   },
      //   fail: function (err) {
      //     console.log(err);
      //   }
      // })
      $.removeStorage(id);
    })

  //dom播放
    setTimeout(() => {
      this.setData({
        action: {
          method: 'play'
        }
      })
    }, 100);
  },
  getNextSongId: function () {
    if (this.data.mode === 'single') {
      return this.data.currentId;
    } else if (this.data.mode === 'random') {
      return idsArr[Math.floor(Math.random() * idsArr.length)]
    } else if (this.data.mode === 'loop') {
      return this.idsMap[Number(this.data.currentId)].nextid;
    }
  },
  getLyricList: function (song) {
    var obj = {},
      lyricList = [],
      zh = song.lrc.lyric ? song.lrc.lyric.split('\n') : [],
      en = song.en ? song.en.split('\n') : [];

    zh.forEach(function (str) {
      var arr = str.match(strRe);
      if (!arr) return;

      var k = arr[1],
        v = arr[2] || '(music)';

      if (!obj[k]) obj[k] = {};
      obj[k].zh = v;
    });
    if (en.length) {
      this.isEnSong = true;
    } else {
      this.isEnSong = false;
    }

    en.forEach(function (str) {
      var arr = str.match(strRe);
      if (!arr) return;

      var k = arr[1],
        v = arr[2] || '(music)';

      if (!obj[k]) obj[k] = {};
      obj[k].en = v;
    });

    for (var t in obj) {
      var ts = t.split(':');
      var time = parseInt(ts[0]) * 60 + parseInt(ts[1]);

      if (lyricList.length) {
        lyricList[lyricList.length - 1].endtime = time;
      }

      lyricList.push({
        time: time,
        zh: obj[t].zh,
        en: obj[t].en
      });
    }

    return lyricList;
  },
  clearTurner: function () {
    if (this.turner) {
      clearInterval(this.turner);
      this.turner = null;
    }
  },
  addFav: function (favName) {
    if (!favName) {
      return;
    }

    var id = this.data.currentId,
      fav = wx.getStorageSync('fav') || {},
      favlist = wx.getStorageSync('favlist') || {};

    fav[id] = favName;
    if (!favlist[favName]) favlist[favName] = {
      picurl: '',
      list: []
    }

    var favData = favlist[favName];
    favData.picurl = data[id].album.picUrl;
    favData.list.push(id);

    wx.setStorageSync('fav', fav);
    wx.setStorageSync('favlist', favlist);

    this.setData({
      fav: 'liked',
      toastMsg: '收藏成功',
      toastHidden: false,
      favHidden: true,
      favlist: favUtil.getFavList()
    });
  },
  formatTime: function (time) {
    time = Math.floor(time);
    var m = Math.floor(time / 60).toString();
    m = m.length < 2 ? '0' + m : m;

    var s = (time - parseInt(m) * 60).toString();
    s = s.length < 2 ? '0' + s : s;

    return `${m}:${s}`;
  },
  seek: function (e) {
    console.log(e);
    this.setData({
      per:e.detail.value
    })
    this.audioCtx.pause();
    this.audioCtx.seek(this.data.durationNum*e.detail.value/100);
    this.audioCtx.play();
  },
  
})