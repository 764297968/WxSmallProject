//index.js
var data = require('../../utils/data.js').songs;
var song = require('../../utils/data.js').song;
var base64 = require('../../utils/base64.js');
var appdata = getApp().globalData;
var apiurl = appdata.api;
Page({
  data: {
    imgUrls: [
      'http://p3.music.126.net/bKFfzVVNmdLTaRN5uHHPqA==/18786255672743757.jpg',
      'http://p4.music.126.net/n15ddawhY4cyIzFu23CSJA==/1401877341861315.jpg',
      'http://p3.music.126.net/zMwH3zh33TAacyh2_4RjXw==/1375489062675977.jpg'
    ], currentShow: "recommend",
    select: "recommend",
    recommendsongs: [],
    song: song
  },
  onLoad: function () {
    var that = this;
    wx.showLoading({
      title: "加载中",
      //mask:true
    })
    //最新音乐
    wx.request({
      url: apiurl.apiurl + apiurl.newsonurl,
      method: "get",
      dataType: "text",
      success: function (res) {

        var result = JSON.parse(JSON.parse(decodeURIComponent(res.data))).result;
        that.setData({
          recommendsongs: result
        })

      }
    })
    //热歌
    wx.request({
      url: apiurl.apiurl + apiurl.detailurl + "?id=3778678",
      method: "get",
      dataType: "text",
      success: function (res) {
        wx.hideLoading()
        var result = JSON.parse(JSON.parse(decodeURIComponent(res.data))).result;
        console.log(result);
        that.setData({
          recommends: result.tracks.slice(0, 20),
        });
      }
    })
    // var rs = [],
    // 	idsMap = {},
    // 	keys = Object.keys(data),
    // 	len = keys.length;

    // for (var i = 0; i < len; i++) {
    // 	var k = keys[i];

    // 	rs.push(Object.assign({
    // 		id: k,
    // 	}, data[k]));

    // 	idsMap[k] = {
    // 		preid: i > 0 ? keys[i - 1] : 0,
    // 		nextid: i < len - 1 ? keys[i + 1] : 0
    // 	}
    // }

    // idsMap[keys[0]].preid = keys[len - 1];
    // idsMap[keys[len - 1]].nextid = keys[0];

    // // this.setData({
    // // 	recommends: rs
    // // });

    //wx.setStorageSync('ids', idsMap);
  },
  playTap: function (e) {
    const dataset = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../play/index?id=${dataset.id}`
    })
  },
  showNavigation: function (event) {
    var that = this;
    var selectName = event.currentTarget.dataset.name;
    this.setData({
      currentShow: selectName,
      select: selectName
    });
    console.log(that.data);
  }
})