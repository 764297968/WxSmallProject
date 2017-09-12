//index.js
var data = require('../../utils/data.js').songs;
var song = require('../../utils/data.js').song;
var $=getApp();
var appdata =$.globalData;
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
    song: song,
    navigation: appdata.navigation,
    inputShowed: false, 
    inputVal: '',
    hotshow:true,
    searchsongshow:false,
    searchkeyshow:false
  },
  onLoad: function () {
    var that = this;
    wx.showLoading({
      title: "加载中",
      //mask:true
    })
    //最新音乐
    $.ajax({
      url: apiurl.apiurl + apiurl.newsonurl,
      method: "get",
      dataType: "text"
    }).then(
       function (res) {
        console.log(res);
        
        
       
        var result = res.result;
        var imgs=[];

        // result.forEach(function (value, index, array) {
        //   var img = $.getStorage(value.song.album.picUrl + "img");
        //   if (!img)
        //   {
        //   wx.downloadFile({
        //     url: value.song.album.picUrl,
        //     success: function (res) {
        //       console.log('downloadFile success, res is', res)
        //       console.log(this.url);
        //       $.setStorage(value.song.album.picUrl + "img", res.tempFilePath)
        //       value.song.album.piclocalUrl = res.tempFilePath;
        //     },
        //     fail: function (errMsg) {
        //       console.log('downloadFile fail, err is:', errMsg)
        //     }
        //   })
        //   }else{
        //     value.song.album.piclocalUrl =img;
        //   }
        // });
      
        that.setData({
          recommendsongs: result
        })
      })
    //热歌
    $.ajax({
      url: apiurl.apiurl + apiurl.detailurl + "?id=3778678&n=10",
      method: "get",
      dataType: "text"
    }).then(function (res) {
      that.setData({
        recommends: res.playlist.tracks,
      });
    })
    //热门搜索
    $.ajax({
      url: apiurl.apiurl + apiurl.searchhoturl+"?type=1111",
    }).then(function(res){
      that.setData({
        hots:res.result.hots
      })
    })

    

    // this.setData({
    // 	recommends: rs
    // });

    wx.setStorageSync('ids', idsMap);
  },
  playTap: function (e) {
    const dataset = e.currentTarget.dataset;
    wx.setStorageSync(dataset.id.toString(), dataset.song);

    wx.navigateTo({
      url: `../play/index?id=${dataset.id}`
    })
  },
  newsongplayTap:function(e)
  {
    const dataset = e.currentTarget.dataset;
    dataset.song.song.h={};
    dataset.song.song.al={};
    dataset.song.song.h.br=dataset.song.song.bMusic.bitrate;
    dataset.song.song.al.picUrl = dataset.song.song.album.picUrl;
    wx.setStorageSync(dataset.id.toString(), dataset.song.song);


    // var rs = [],
    //   idsMap = {},
    //   keys = Object.keys(data),
    //   len = keys.length;

    // for (var i = 0; i < len; i++) {
    //   var k = keys[i];

    //   rs.push(Object.assign({
    //     id: k,
    //   }, data[k]));

    //   idsMap[k] = {
    //     preid: i > 0 ? keys[i - 1] : 0,
    //     nextid: i < len - 1 ? keys[i + 1] : 0
    //   }
    // }

    // idsMap[keys[0]].preid = keys[len - 1];
    // idsMap[keys[len - 1]].nextid = keys[0];
    var idsMap = [];
    var recommendsongs = this.data.recommendsongs;
      recommendsongs.forEach(function (value, index, arr) {
      idsMap.push({
        preid:index>0?index-1:0,
        nextid: index < recommendsongs.length?index+1:0
      });
    })



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
  },
  //搜索
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: "",
      hotshow: true,
      searchkeyshow:false,
      ssshow:false
    });
  },
  inputTyping: function (e) {
    var that=this;
    that.setData({
      inputVal: e.detail.value,
      hotshow: false,
    });
    //显示搜索文本
    that.setData({
      searchtext: e.detail.value 
    })
    //显示热搜
    if (e.detail.value=="")
    {
      that.setData({
        hotshow: true,
        searchkeyshow: false,
      })
    }else{
      $.ajax({
        url: apiurl.apiurl + apiurl.searchkeywordurl,
        method:"post",
        header:{
          "Content-Type":"application/x-www-form-urlencoded"
        },
        loading:false,
        data:{
          s: e.detail.value
        }
      }).then(function(res){
        console.log(res);
        that.setData({
          allMatch: res.result.allMatch,
          searchkeyshow:true
        })
      })
    }
  },
  keysearch:function(e)
  {
    var that=this;
   
    var word = e.currentTarget.dataset.val;
    that.setData({
      inputVal:word,
      hotshow:false,
    })
      $.ajax({
        url: apiurl.apiurl + apiurl.searchgeturl,
        method:"post",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data:{
          limit:20,
          offset:0,
          queryCorrect:true,
          s:word,
          strategy:5,
          type:1
        }
      }).then(function(res){
        that.setData({
          searchsongs:   res.result.songs,
          ssshow:true,
          searchkeyshow:false
        })
      })
  }
})